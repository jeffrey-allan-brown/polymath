// define constants //
// ... //

// // process colors //
// function convertColors(code) {
//   let r = code >> 16;
//   let g = code >> 8 & 255;
//   let b = code & 255
//   return `rgb(${r},${g},${b})`;
// }

// // create page and document elements //
async function createVectorElement(element, attributes = {}, parent) {
	let node = document.createElementNS("http://www.w3.org/2000/svg", element); 
	for (let attribute in attributes) {
		attributes.hasOwnProperty(attribute) && node.setAttribute(attribute, attributes[attribute])
	}
	return parent && parent.appendChild(node), node;
}

// create shape: line //
function createLine(node, parent) {
  // <path d="M284 477.5703621905065Q467.7590341195586 477.62595627332604 698 477.5703621905065" fill="none" stroke="rgb(43,120,228)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="undefined"></path>
  let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute("d", node.path);
  path.setAttribute("fill", "none");
  path.setAttribute("stroke", "rgb(0,0,0)");
  path.setAttribute("stroke-width", node.bdWidth)
  parent.appendChild(path);
  console.log(parent)
}

// create shape: rectangle //
function createRectangle(node, parent) {

  // create group container //
  let group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  group.setAttribute("data-group-id", node.nodeTitle );
  group.classList.add('pathwayNode', 'clickableGrouping')

  // create rectangle vector //
  let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttribute("x", node.xpos);
  rect.setAttribute("y", node.ypos);
  rect.setAttribute("width", node.width);
  rect.setAttribute("height", node.height);
  rect.setAttribute("rx", node.properties.radius);
  // rect.setAttribute("fill", node.properties.bgColor);
  rect.setAttribute("fill-opacity", node.properties.opacity);
  rect.setAttribute("stroke", node.properties.bdColor);
  rect.setAttribute("stroke-width", node.properties.bdWidth);
  rect.classList.add('pathwayNode')

  parent.appendChild(group);
  group.appendChild(rect);

  // add optional text //
  if (node.label) {
    let text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    let textPosX = Number(node.xpos) + Number(node.width / 2);
    let textPosY = Number(node.ypos) + Number(node.height / 2);

    text.setAttribute("x", textPosX);
    text.setAttribute("y", textPosY);
    text.setAttribute("fill", node.properties.bdColor);
    text.setAttribute("font-style", "normal");
    text.setAttribute("font-weight", "normal");
    text.setAttribute("font-size", node.label.fontSize);
    text.setAttribute("dominant-baseline", "middle");
    text.setAttribute("text-anchor", "middle");
    let content = document.createTextNode(node.label.text)
    text.appendChild(content);
    group.appendChild(text)
  }
}


// main function //
export async function renderPolymathPathway(data, pathwayRoot) {

  // // define key variables //
  const nodes = data.frontEndWebDevelopment.nodes;
  const configuration = data.frontEndWebDevelopment.meta.configuration;
  const containerWidth = pathwayRoot.offsetWidth;

  const config = {
    minw: 0,
    minh: 0,
    width: containerWidth,
    height: 300
  }

  // // create the primary pathway frame //
  const pathwayFrame = await createVectorElement("svg", { 
    "xmlns": "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "viewBox": `${config.minw}, ${config.minh}, ${config.width}, ${config.height}` 
  }, pathwayRoot);

  // loop through nodes and render elements //
  for (let node in nodes) {
    console.log("...generating node: ", nodes[node]);
    if (nodes[node].nodeTypeId == 'rect') {
      createRectangle(nodes[node], pathwayFrame);
    } else if (nodes[node].nodeTypeId == 'path') {
      createLine(nodes[node], pathwayFrame);
    }
  }
}