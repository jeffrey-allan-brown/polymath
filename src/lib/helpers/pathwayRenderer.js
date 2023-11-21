// define constants //
/* <rect x="556.35" y="1440.35" width="136.3" height="45.3" rx="2" fill="rgb(255,229,153)" fill-opacity="1" stroke="rgb(0,0,0)" stroke-width="2.7"></rect>
<text x="594" y="1468.6370000839233" fill="rgb(0,0,0)" font-style="normal" font-weight="normal" font-size="17px"><tspan>Tailwind</tspan></text> */

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
  console.log("...creating element...", element, attributes, parent)
	let node = document.createElementNS("http://www.w3.org/2000/svg", element); 
	for (let attribute in attributes) {
		attributes.hasOwnProperty(attribute) && node.setAttribute(attribute, attributes[attribute])
	}
	return parent && parent.appendChild(node), node;
}

// create shape: rectangle //
function createRectangle(node, parent) {
  console.log("...creating rectangle...");

  // create group container //
  let group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  group.setAttribute("class", "clickable-group");
  group.setAttribute("data-group-id", node.nodeTitle );

  // create rectangle vector //

  let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttribute("x", node.xpos);
  rect.setAttribute("y", node.ypos);
  rect.setAttribute("width", node.width);
  rect.setAttribute("height", node.height);
  rect.setAttribute("rx", node.properties.radius);
  rect.setAttribute("fill", node.properties.bgColor);
  rect.setAttribute("fill-opacity", node.properties.opacity);
  rect.setAttribute("stroke", node.properties.bdColor);
  rect.setAttribute("stroke-width", node.properties.bdWidth);

  parent.appendChild(group);
  group.appendChild(rect);
}

function renderLinkIcon(node) {
  const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const iconPath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );

  iconSvg.setAttribute('fill', 'none');
  iconSvg.setAttribute('viewBox', '0 0 24 24');
  iconSvg.setAttribute('stroke', 'black');
  iconSvg.classList.add('post-icon');

  iconPath.setAttribute(
    'd',
    'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
  );
  iconPath.setAttribute('stroke-linecap', 'round');
  iconPath.setAttribute('stroke-linejoin', 'round');
  iconPath.setAttribute('stroke-width', '2');

  iconSvg.appendChild(iconPath);

  return node.appendChild(iconSvg);
}


// main function //
export async function renderPolymathPathway(data, pathwayRoot) {
  console.log("...rendering pathway...")

  // // define key variables //
  const nodes = data.nodes;
  const configuration = data.meta.configuration;

  // // create the primary pathway frame //
  const pathwayFrame = await createVectorElement("svg", { 
    "xmlns": "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "viewBox": `${configuration.minw}, ${configuration.minh}, ${configuration.width}, ${configuration.height}` 
  }, pathwayRoot);

  // loop through nodes and render elements //
  for (let node in nodes) {
    console.log("...generating node: ", nodes[node]);
    if (nodes[node].nodeTypeId == 'rect') {
      createRectangle(nodes[node], pathwayFrame)
    }
  }
}