// define constants //
// ... //

// process colors //
function convertColors(code) {
  let r = code >> 16;
  let g = code >> 8 & 255;
  let b = code & 255
  return `rgb(${r},${g},${b})`;
}

// create page and document elements //
function createSVGElement(element, attributes = {}, parent ) {
	let node = document.createElementNS("http://www.w3.org/2000/svg", element); 
	for (let attribute in attributes) {
		attributes.hasOwnProperty(attribute) && node.setAttribute(attribute, attributes[attribute])
	}
	return parent && parent.appendChild(node), node;
}

class Renderer {
	constructor(svgRoot, fontFamily) {
		this.svgRoot = svgRoot, this.fontFamily = fontFamily;
		this.canvasRenderingContext2D = document.createElement("canvas").getContext("2d");
  }
}

export async function renderPolymathPathway(data, attributes = {}) {
  console.log('hi')
}