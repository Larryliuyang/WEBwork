{

  const adom = document.querySelector("nav > a");
  const uldom = document.querySelector("nav > ul");
  adom.addEventListener("click", function(event) {
       uldom.classList.toggle("open");
  });

}

{

  const Project=document.querySelector("a[class='ProjectA']");
  const project = document.querySelector("li[class='Project']>ul");
   Project.addEventListener("click", function(event) {
       project.classList.toggle("open");
  });

}

{

  const NodeSub = document.querySelector("li[class='nodeSub']");
  const node= document.querySelector("li[class='nodeSub']>ul");
  NodeSub.addEventListener("click", function(event) {
       node.classList.toggle("open");
  });

}

{

  const CQSRSub= document.querySelector("li[class='CQRSSub']");
  const cqsr = document.querySelector("li[class='CQRSSub']>ul");
  CQSRSub.addEventListener("click", function(event) {
       cqsr.classList.toggle("open");
  });

}
{

  const ThreeSub = document.querySelector("li[class='ThreeSub']");
  const Threesub = document.querySelector("li[class='ThreeSub']>ul");
  ThreeSub.addEventListener("click", function(event) {
       Threesub.classList.toggle("open");
  });

}
