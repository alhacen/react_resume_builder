export const Template = (data) =>{
  console.log(data)
      return (`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <title>React Resume Builder</title>
        <div id="loading"><h1 style="text-align:center" class="title  has-text-centered">please wait...</h1></div>
          <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
          <script src="https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js"></script>
          <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
          
          <!-- Don't use this in production: -->
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css" >
        
        </head>
        
        <body id="body">
        
          <div id="root"></div>
      <script>
      "use strict"; 
      const data=`+JSON.stringify(data)+`
      
      
      const getData = key => {
        //return data.resume.data[1].name
        for (let i in data.resume.data) {
          if (data.resume.data[i].name === key) return data.resume.data[i];
        }
      };
      
      const getValue = (data, key) => {
        //return data[0].value
        for (let i in data) {
          if (data[i].name === key) return data[i].value;
        }
      
        return false;
      };
      
      console.log(getValue(getData("links").fields[0], "github"));
      const isEmpty = key => {
          let data = getData(key);
          console.log(data.fields[0][0]);
          return data.fields[0][0].value == "" ? true : false;
        };
        const Certificate = () => {
          let data = getData("certificate");
          if (isEmpty("certificate")) {
            return /*#__PURE__*/React.createElement(React.Fragment, null);
        }
          return /*#__PURE__*/React.createElement("div", {
            class: "mt20"
          }, /*#__PURE__*/React.createElement("p", {
            class: "is-size-4"
          }, "certificate"), /*#__PURE__*/React.createElement("ul", {
            class: "steps is-thin is-vertical"
          }, data.fields.map((input, index) => {
            return /*#__PURE__*/React.createElement("li", {
              class: "steps-segment"
            }, /*#__PURE__*/React.createElement("span", {
              href: "#",
              class: "steps-marker"
            }), /*#__PURE__*/React.createElement("div", {
              class: "steps-content"
            }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", {
              class: "is-size-4"
            }, getValue(input, 'certificate')), " ", /*#__PURE__*/React.createElement("span", {
              class: "is-size-6"
            }, getValue(input, 'issuer')))));
          })));
        };
        const Experience = () => {
          let data = getData("work-and-professional-experience");
          if (isEmpty("work-and-professional-experience")) {
            return /*#__PURE__*/React.createElement(React.Fragment, null);
        }
          return /*#__PURE__*/React.createElement("div", {
            class: "mt20"
          }, /*#__PURE__*/React.createElement("p", {
            class: "is-size-4"
          }, "Work and Professional Experience"), /*#__PURE__*/React.createElement("ul", {
            class: "steps is-thin is-vertical"
          }, data.fields.map((input, index) => {
            return /*#__PURE__*/React.createElement("li", {
              class: "steps-segment"
            }, /*#__PURE__*/React.createElement("span", {
              href: "#",
              class: "steps-marker"
            }), /*#__PURE__*/React.createElement("div", {
              class: "steps-content"
            }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", {
              class: "is-size-6"
            }, new Date(getValue(input, 'starting-date')).getFullYear(), "-", new Date(getValue(input, 'end-date')).getFullYear()), " ", /*#__PURE__*/React.createElement("span", {
              class: "is-size-4"
            }, getValue(input, 'company-name'))), /*#__PURE__*/React.createElement("p", {
              class: "is-size-6"
            }, getValue(input, 'designation'))));
          })));
        };
      const Education = () => {
        let data = getData("education");
        if (isEmpty("education")) {
          return /*#__PURE__*/React.createElement(React.Fragment, null);
      }
        return /*#__PURE__*/React.createElement("div", {
          class: "mt20"
        }, /*#__PURE__*/React.createElement("p", {
          class: "is-size-4"
        }, "Education"), /*#__PURE__*/React.createElement("ul", {
          class: "steps is-thin is-vertical"
        }, data.fields.map((input, index) => {
          return /*#__PURE__*/React.createElement("li", {
            class: "steps-segment"
          }, /*#__PURE__*/React.createElement("span", {
            href: "#",
            class: "steps-marker"
          }), /*#__PURE__*/React.createElement("div", {
            class: "steps-content"
          }, /*#__PURE__*/React.createElement("p", {
            class: "is-size-4"
          }, new Date(getValue(input, 'date')).getFullYear()), /*#__PURE__*/React.createElement("p", null, getValue(input, 'degree'), ", ", getValue(input, 'college'))));
        })));
      };
    
      const Project = () => {
        let data = getData("project");
        if (isEmpty("project")) {
          return /*#__PURE__*/React.createElement(React.Fragment, null);
      }
        return /*#__PURE__*/React.createElement("div", {
          class: "mt20"
        }, /*#__PURE__*/React.createElement("p", {
          class: "is-size-4"
        }, "Project"), data.fields.map((input, index) => {
          return /*#__PURE__*/React.createElement("div", {
            class: "p10"
          }, /*#__PURE__*/React.createElement("div", {
            id: "projectList"
          }, /*#__PURE__*/React.createElement("p", {
            class: "is-size-5 has-text-link has-text-weight-bold"
          }, getValue(input, 'project-name'), " ", /*#__PURE__*/React.createElement("a", {
            href: getValue(input, 'project-link'),
            class: "is-size-6 is-italic"
          }, "-Link")), /*#__PURE__*/React.createElement("p", {
            class: ""
          }, getValue(input, 'about-project'))));
        }));
      };
      
      const Achivements = () => {
        let data = getData("achivements");
        if (isEmpty("achivements")) {
          return /*#__PURE__*/React.createElement(React.Fragment, null);
      }
        return /*#__PURE__*/React.createElement("div", {
          class: "mt20"
        }, /*#__PURE__*/React.createElement("p", {
          class: "is-size-4"
        }, "Achivements"), data.fields.map((achivement, index) => {
          return /*#__PURE__*/React.createElement("div", {
            class: "p10"
          }, /*#__PURE__*/React.createElement("div", {
            id: "projectList"
          }, achivement[0].value.map((a, index) => {
            return /*#__PURE__*/React.createElement("p", null, index + 1, ". ", a);
          })));
        }));
      };
      const Languages = () => {
        let data = getData("language-known");
        if (isEmpty("language-known")) {
          return /*#__PURE__*/React.createElement(React.Fragment, null);
      }
        return /*#__PURE__*/React.createElement("div", {
          class: "mt20"
        }, /*#__PURE__*/React.createElement("p", {
          class: "is-size-4"
        }, "language-known"), data.fields.map((language, index) => {
          return /*#__PURE__*/React.createElement("div", {
            class: "p10"
          }, /*#__PURE__*/React.createElement("div", {
            id: "languageList"
          }, language[0].value.map((a, index) => {
            return /*#__PURE__*/React.createElement("p", null, index + 1, ". ", a);
          })));
        }));
      };
      
      "use strict";
      "use strict";
  const Main = () => {
    return /*#__PURE__*/React.createElement("div", {
      id: "resume"
    }, /*#__PURE__*/React.createElement("section", {
      class: "section"
    }, /*#__PURE__*/React.createElement("div", {
      id: "a",
      class: "p25"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("table", {
      class: "mb40 w100"
    }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      id: "mobileNumber ",
      class: "has-text-link"
    }, getValue(getData("basic").fields[0], "mobile-number")), /*#__PURE__*/React.createElement("td", {
      id: "sociallink1 ",
      class: "has-text-right"
    }, getValue(getData("links").fields[0], "link1") ? /*#__PURE__*/React.createElement("p", {
      class: "spacing2"
    }, /*#__PURE__*/React.createElement("span", {
      class: "has-text-link "
    }, /*#__PURE__*/React.createElement("a", {
      href: getValue(getData("links").fields[0], "link1")
    }, getValue(getData("links").fields[0], "link1")))) : null)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      id: "email"
    }, getValue(getData("basic").fields[0], "email-address")), /*#__PURE__*/React.createElement("td", {
      id: "sociallink2",
      class: "has-text-right"
    }, getValue(getData("links").fields[0], "link2") ? /*#__PURE__*/React.createElement("p", {
      class: "spacing2"
    }, /*#__PURE__*/React.createElement("span", {
      class: "has-text-link "
    }, /*#__PURE__*/React.createElement("a", {
      href: getValue(getData("links").fields[0], "link2")
    }, getValue(getData("links").fields[0], "link2")))) : null)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      id: "email"
    }), /*#__PURE__*/React.createElement("td", {
      id: "sociallink2",
      class: "has-text-right"
    }, getValue(getData("links").fields[0], "link3") ? /*#__PURE__*/React.createElement("p", {
      class: "spacing2"
    }, /*#__PURE__*/React.createElement("span", {
      class: "has-text-link "
    }, /*#__PURE__*/React.createElement("a", {
      href: getValue(getData("links").fields[0], "link3")
    }, getValue(getData("links").fields[0], "link3")))) : null)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      id: "name",
      class: "title "
    }, getValue(getData("basic").fields[0], "name")), /*#__PURE__*/React.createElement("hr", {
      class: "border2px"
    }), /*#__PURE__*/React.createElement("p", {
      id: "aboutMe"
    }, getValue(getData("basic").fields[0], "about"))), /*#__PURE__*/React.createElement(Experience, null), /*#__PURE__*/React.createElement(Project, null), /*#__PURE__*/React.createElement(Education, null), /*#__PURE__*/React.createElement(Achivements, null), /*#__PURE__*/React.createElement(Certificate, null), /*#__PURE__*/React.createElement(Languages, null))));
  };
      
      ReactDOM.render( /*#__PURE__*/React.createElement(Main, null), document.getElementById('root'));
      </script>
      <style>
      .p25{padding:25px}
      .p10{padding:10px}
      .mb40{margin-bottom:40px;}
      .mt20{margin-top:20px}
      .mb20{margin-bottom:20px}
      .w100{width:100%}
      .spacing2{letter-spacing:2px}
      .border2px{border:2px solid}
      #resume{width:786px;margin-left:auto;margin-right:auto}
  @keyframes spinAround{from{transform:rotate(0deg)}to{transform:rotate(359deg)}}.steps:not(:last-child){margin-bottom:1.5rem}.steps .steps-segment{position:relative}.steps .steps-segment:not(:last-child):after{content:" ";display:block;position:absolute}@media screen and (max-width: 768px){.steps:not(.is-horizontal) .steps-segment{display:block}.steps:not(.is-horizontal) .steps-segment:not(:last-child){min-height:4em}.steps:not(.is-horizontal).is-short .steps-segment{flex-grow:0}.steps:not(.is-horizontal).is-short.is-centered{justify-content:center}.steps:not(.is-horizontal).is-short.is-bottom{justify-content:flex-end}.steps:not(.is-horizontal):not(.is-short){height:100%;display:flex;flex-direction:column}.steps:not(.is-horizontal):not(.is-short) .steps-segment:not(:last-child){flex-grow:1}}.steps.is-vertical .steps-segment{display:block}.steps.is-vertical .steps-segment:not(:last-child){min-height:4em}.steps.is-vertical.is-short .steps-segment{flex-grow:0}.steps.is-vertical.is-short.is-centered{justify-content:center}.steps.is-vertical.is-short.is-bottom{justify-content:flex-end}.steps.is-vertical:not(.is-short){height:100%;display:flex;flex-direction:column}.steps.is-vertical:not(.is-short) .steps-segment:not(:last-child){flex-grow:1}@media screen and (min-width: 769px), print{.steps:not(.is-vertical){display:flex}.steps:not(.is-vertical) .steps-segment:not(:last-child){flex-basis:1rem;flex-grow:1;flex-shrink:1}.steps:not(.is-vertical).is-narrow .steps-segment{flex-grow:0}.steps:not(.is-vertical).is-narrow .steps-segment:not(:last-child){min-width:10em}.steps:not(.is-vertical).is-narrow.is-centered{justify-content:center}.steps:not(.is-vertical).is-narrow.is-right{justify-content:flex-end}.steps:not(.is-vertical).has-content-centered{text-align:center}.steps:not(.is-vertical).is-balanced .steps-segment:last-child,.steps:not(.is-vertical).has-content-centered .steps-segment:last-child{flex-basis:1rem;flex-grow:1;flex-shrink:1}.steps:not(.is-vertical).is-narrow.has-content-centered .steps-segment:last-child{flex-grow:0;min-width:10em}.steps:not(.is-vertical) .steps-content.is-divider-content{text-align:center}}.steps.is-horizontal{display:flex}.steps.is-horizontal .steps-segment:not(:last-child){flex-basis:1rem;flex-grow:1;flex-shrink:1}.steps.is-horizontal.is-narrow .steps-segment{flex-grow:0}.steps.is-horizontal.is-narrow .steps-segment:not(:last-child){min-width:10em}.steps.is-horizontal.is-narrow.is-centered{justify-content:center}.steps.is-horizontal.is-narrow.is-right{justify-content:flex-end}.steps.is-horizontal.has-content-centered{text-align:center}.steps.is-horizontal.is-balanced .steps-segment:last-child,.steps.is-horizontal.has-content-centered .steps-segment:last-child{flex-basis:1rem;flex-grow:1;flex-shrink:1}.steps.is-horizontal.is-narrow.has-content-centered .steps-segment:last-child{flex-grow:0;min-width:10em}.steps.is-horizontal .steps-content.is-divider-content{text-align:center}.steps .steps-marker{align-items:center;display:flex;border-radius:50%;font-weight:700;justify-content:center;position:relative;z-index:5}.steps{font-size:1rem}.steps .steps-marker{height:2rem;width:2rem;overflow:hidden}@media screen and (max-width: 768px){.steps:not(.is-horizontal){display:flex;flex-direction:column}.steps:not(.is-horizontal) .steps-segment:not(:last-child):after{bottom:-.24rem;left:calc(1rem - (.2em));top:1.76rem;width:.4em}.steps:not(.is-horizontal) .steps-content{margin-left:calc(1rem + .5em);margin-top:-2rem;padding-left:1em;padding-bottom:1em}.steps:not(.is-horizontal) .steps-content.is-divider-content{margin-top:0;padding-bottom:0}.steps:not(.is-horizontal).has-content-centered .steps-content{padding-top:calc(1rem - .5em)}.steps:not(.is-horizontal):not(.is-thin).has-gaps .steps-segment:not(:last-child):after,.steps:not(.is-horizontal):not(.is-thin) .steps-segment.has-gaps:not(:last-child):after{top:2.3rem;bottom:.3rem}}.steps.is-vertical{display:flex;flex-direction:column}.steps.is-vertical .steps-segment:not(:last-child):after{bottom:-.24rem;left:calc(1rem - (.2em));top:1.76rem;width:.4em}.steps.is-vertical .steps-content{margin-left:calc(1rem + .5em);margin-top:-2rem;padding-left:1em;padding-bottom:1em}.steps.is-vertical .steps-content.is-divider-content{margin-top:0;padding-bottom:0}.steps.is-vertical.has-content-centered .steps-content{padding-top:calc(1rem - .5em)}.steps.is-vertical:not(.is-thin).has-gaps .steps-segment:not(:last-child):after,.steps.is-vertical:not(.is-thin) .steps-segment.has-gaps:not(:last-child):after{top:2.3rem;bottom:.3rem}@media screen and (min-width: 769px), print{.steps:not(.is-vertical) .steps-segment:not(:last-child):after{height:.4em;left:1.76rem;right:-.24rem;top:calc(1rem - (.2em))}.steps:not(.is-vertical).has-content-above .steps-segment:not(:last-child)::after{bottom:calc(1rem - (.2em));top:auto}.steps:not(.is-vertical) .extra-data{left:calc(50% + 1.3rem);right:calc(-50% + 1.3rem);bottom:100%;position:absolute}.steps:not(.is-vertical) .extra-data.has-overflow-right{overflow:visible;right:auto;white-space:nowrap;min-width:calc(100% - 1rem - (.2em))}.steps:not(.is-vertical) .extra-data.has-overflow-left{overflow:visible;left:auto;white-space:nowrap;min-width:calc(100% - 1rem - (.2em))}.steps:not(.is-vertical) .extra-data.has-overflow-centered{overflow:visible;left:auto;white-space:nowrap;min-width:calc(100% - 1rem - (.2em))}.steps:not(.is-vertical).has-content-above .extra-data{top:100%;bottom:auto}.steps:not(.is-vertical) .steps-content{margin-left:1rem}.steps:not(.is-vertical) .steps-content:not(:last-child){margin-right:-1rem}.steps:not(.is-vertical) .steps-content.is-divider-content{margin-right:-1rem;padding-left:2em;padding-right:2em}.steps:not(.is-vertical).has-content-centered .steps-segment:not(:last-child):after{left:50%;right:-50%}.steps:not(.is-vertical).has-content-centered .steps-marker{position:absolute;left:calc(50% - 1rem)}.steps:not(.is-vertical).has-content-centered .steps-content{margin-top:2rem;margin-left:.5em;margin-right:.5em;padding-top:.2em}.steps:not(.is-vertical).has-content-above.has-content-centered .steps-content{margin-bottom:2rem;padding-bottom:.2em}.steps:not(.is-vertical):not(.is-thin).has-gaps .steps-segment:not(:last-child):after,.steps:not(.is-vertical):not(.is-thin) .steps-segment.has-gaps:not(:last-child):after{left:2.3rem;right:.3rem}.steps:not(.is-vertical):not(.is-thin).has-content-centered.has-gaps .steps-segment:not(:last-child):after,.steps:not(.is-vertical):not(.is-thin).has-content-centered .steps-segment.has-gaps:not(:last-child):after{left:calc(50% + 1.3rem);right:calc(-50% + 1.3rem)}}.steps.is-horizontal .steps-segment:not(:last-child):after{height:.4em;left:1.76rem;right:-.24rem;top:calc(1rem - (.2em))}.steps.is-horizontal.has-content-above .steps-segment:not(:last-child)::after{bottom:calc(1rem - (.2em));top:auto}.steps.is-horizontal .extra-data{left:calc(50% + 1.3rem);right:calc(-50% + 1.3rem);bottom:100%;position:absolute}.steps.is-horizontal .extra-data.has-overflow-right{overflow:visible;right:auto;white-space:nowrap;min-width:calc(100% - 1rem - (.2em))}.steps.is-horizontal .extra-data.has-overflow-left{overflow:visible;left:auto;white-space:nowrap;min-width:calc(100% - 1rem - (.2em))}.steps.is-horizontal .extra-data.has-overflow-centered{overflow:visible;left:auto;white-space:nowrap;min-width:calc(100% - 1rem - (.2em))}.steps.is-horizontal.has-content-above .extra-data{top:100%;bottom:auto}.steps.is-horizontal .steps-content{margin-left:1rem}.steps.is-horizontal .steps-content:not(:last-child){margin-right:-1rem}.steps.is-horizontal .steps-content.is-divider-content{margin-right:-1rem;padding-left:2em;padding-right:2em}.steps.is-horizontal.has-content-centered .steps-segment:not(:last-child):after{left:50%;right:-50%}.steps.is-horizontal.has-content-centered .steps-marker{position:absolute;left:calc(50% - 1rem)}.steps.is-horizontal.has-content-centered .steps-content{margin-top:2rem;margin-left:.5em;margin-right:.5em;padding-top:.2em}.steps.is-horizontal.has-content-above.has-content-centered .steps-content{margin-bottom:2rem;padding-bottom:.2em}.steps.is-horizontal:not(.is-thin).has-gaps .steps-segment:not(:last-child):after,.steps.is-horizontal:not(.is-thin) .steps-segment.has-gaps:not(:last-child):after{left:2.3rem;right:.3rem}.steps.is-horizontal:not(.is-thin).has-content-centered.has-gaps .steps-segment:not(:last-child):after,.steps.is-horizontal:not(.is-thin).has-content-centered .steps-segment.has-gaps:not(:last-child):after{left:calc(50% + 1.3rem);right:calc(-50% + 1.3rem)}.steps.is-small{font-size:.75rem}.steps.is-small .steps-marker{height:1.5rem;width:1.5rem;overflow:hidden}@media screen and (max-width: 768px){.steps.is-small:not(.is-horizontal){display:flex;flex-direction:column}.steps.is-small:not(.is-horizontal) .steps-segment:not(:last-child):after{bottom:-.24rem;left:calc(.75rem - (.2em));top:1.26rem;width:.4em}.steps.is-small:not(.is-horizontal) .steps-content{margin-left:calc(.75rem + .5em);margin-top:-1.5rem;padding-left:1em;padding-bottom:1em}.steps.is-small:not(.is-horizontal) .steps-content.is-divider-content{margin-top:0;padding-bottom:0}.steps.is-small:not(.is-horizontal).has-content-centered .steps-content{padding-top:calc(.75rem - .5em)}.steps.is-small:not(.is-horizontal):not(.is-thin).has-gaps .steps-segment:not(:last-child):after,.steps.is-small:not(.is-horizontal):not(.is-thin) .steps-segment.has-gaps:not(:last-child):after{top:1.8rem;bottom:.3rem}}.steps.is-small.is-vertical{display:flex;flex-direction:column}.steps.is-small.is-vertical .steps-segment:not(:last-child):after{bottom:-.24rem;left:calc(.75rem - (.2em));top:1.26rem;width:.4em}.steps.is-small.is-vertical .steps-content{margin-left:calc(.75rem + .5em);margin-top:-1.5rem;padding-left:1em;padding-bottom:1em}.steps.is-small.is-vertical .steps-content.is-divider-content{margin-top:0;padding-bottom:0}.steps.is-small.is-vertical.has-content-centered .steps-content{padding-top:calc(.75rem - .5em)}.steps.is-small.is-vertical:not(.is-thin).has-gaps .steps-segment:not(:last-child):after,.steps.is-small.is-vertical:not(.is-thin) .steps-segment.has-gaps:not(:last-child):after{top:1.8rem;bottom:.3rem}@media screen and (min-width: 769px), print{.steps.is-small:not(.is-vertical) .steps-segment:not(:last-child):after{height:.4em;left:1.26rem;right:-.24rem;top:calc(.75rem - (.2em))}.steps.is-small:not(.is-vertical).has-content-above .steps-segment:not(:last-child)::after{bottom:calc(.75rem - (.2em));top:auto}.steps.is-small:not(.is-vertical) .extra-data{left:calc(50% + 1.05rem);right:calc(-50% + 1.05rem);bottom:100%;position:absolute}.steps.is-small:not(.is-vertical) .extra-data.has-overflow-right{overflow:visible;right:auto;white-space:nowrap;min-width:calc(100% - .75rem - (.2em))}.steps.is-small:not(.is-vertical) .extra-data.has-overflow-left{overflow:visible;left:auto;white-space:nowrap;min-width:calc(100% - .75rem - (.2em))}.steps.is-small:not(.is-vertical) .extra-data.has-overflow-centered{overflow:visible;left:auto;white-space:nowrap;min-width:calc(100% - .75rem - (.2em))}.steps.is-small:not(.is-vertical).has-content-above .extra-data{top:100%;bottom:auto}.steps.is-small:not(.is-vertical) .steps-content{margin-left:.75rem}.steps.is-small:not(.is-vertical) .steps-content:not(:last-child){margin-right:-.75rem}.steps.is-small:not(.is-vertical) .steps-content.is-divider-content{margin-right:-.75rem;padding-left:2em;padding-right:2em}.steps.is-small:not(.is-vertical).has-content-centered .steps-segment:not(:last-child):after{left:50%;right:-50%}.steps.is-small:not(.is-vertical).has-content-centered .steps-marker{position:absolute;left:calc(50% - .75rem)}.steps.is-small:not(.is-vertical).has-content-centered .steps-content{margin-top:1.5rem;margin-left:.5em;margin-right:.5em;padding-top:.2em}.steps.is-small:not(.is-vertical).has-content-above.has-content-centered .steps-content{margin-bottom:1.5rem;padding-bottom:.2em}.steps.is-small:not(.is-vertical):not(.is-thin).has-gaps .steps-segment:not(:last-child):after,.steps.is-small:not(.is-vertical):not(.is-thin) .steps-segment.has-gaps:not(:last-child):after{left:1.8rem;right:.3rem}.steps.is-small:not(.is-vertical):not(.is-thin).has-content-centered.has-gaps .steps-segment:not(:last-child):after,.steps.is-small:not(.is-vertical):not(.is-thin).has-content-centered .steps-segment.has-gaps:not(:last-child):after{left:calc(50% + 1.05rem);right:calc(-50% + 1.05rem)}}.steps.is-small.is-horizontal .steps-segment:not(:last-child):after{height:.4em;left:1.26rem;right:-.24rem;top:calc(.75rem - (.2em))}.steps.is-small.is-horizontal.has-content-above .steps-segment:not(:last-child)::after{bottom:calc(.75rem - (.2em));top:auto}.steps.is-small.is-horizontal .extra-data{left:calc(50% + 1.05rem);right:calc(-50% + 1.05rem);bottom:100%;position:absolute}.steps.is-small.is-horizontal .extra-data.has-overflow-right{overflow:visible;right:auto;white-space:nowrap;min-width:calc(100% - .75rem - (.2em))}.steps.is-small.is-horizontal .extra-data.has-overflow-left{overflow:visible;left:auto;white-space:nowrap;min-width:calc(100% - .75rem - (.2em))}.steps.is-small.is-horizontal .extra-data.has-overflow-centered{overflow:visible;left:auto;white-space:nowrap;min-width:calc(100% - .75rem - (.2em))}.steps.is-small.is-horizontal.has-content-above .extra-data{top:100%;bottom:auto}.steps.is-small.is-horizontal .steps-content{margin-left:.75rem}.steps.is-small.is-horizontal .steps-content:not(:last-child){margin-right:-.75rem}.steps.is-small.is-horizontal .steps-content.is-divider-content{margin-right:-.75rem;padding-left:2em;padding-right:2em}.steps.is-small.is-horizontal.has-content-centered .steps-segment:not(:last-child):after{left:50%;right:-50%}.steps.is-small.is-horizontal.has-content-centered .steps-marker{position:absolute;left:calc(50% - .75rem)}.steps.is-small.is-horizontal.has-content-centered .steps-content{margin-top:1.5rem;margin-left:.5em;margin-right:.5em;padding-top:.2em}.steps.is-small.is-horizontal.has-content-above.has-content-centered .steps-content{margin-bottom:1.5rem;padding-bottom:.2em}.steps.is-small.is-horizontal:not(.is-thin).has-gaps .steps-segment:not(:last-child):after,.steps.is-small.is-horizontal:not(.is-thin) .steps-segment.has-gaps:not(:last-child):after{left:1.8rem;right:.3rem}.steps.is-small.is-horizontal:not(.is-thin).has-content-centered.has-gaps .steps-segment:not(:last-child):after,.steps.is-small.is-horizontal:not(.is-thin).has-content-centered .steps-segment.has-gaps:not(:last-child):after{left:calc(50% + 1.05rem);right:calc(-50% + 1.05rem)}.steps.is-medium{font-size:1.25rem}.steps.is-medium .steps-marker{height:2.5rem;width:2.5rem;overflow:hidden}@media screen and (max-width: 768px){.steps.is-medium:not(.is-horizontal){display:flex;flex-direction:column}.steps.is-medium:not(.is-horizontal) .steps-segment:not(:last-child):after{bottom:-.24rem;left:calc(1.25rem - (.2em));top:2.26rem;width:.4em}.steps.is-medium:not(.is-horizontal) .steps-content{margin-left:calc(1.25rem + .5em);margin-top:-2.5rem;padding-left:1em;padding-bottom:1em}.steps.is-medium:not(.is-horizontal) .steps-content.is-divider-content{margin-top:0;padding-bottom:0}.steps.is-medium:not(.is-horizontal).has-content-centered .steps-content{padding-top:calc(1.25rem - .5em)}.steps.is-medium:not(.is-horizontal):not(.is-thin).has-gaps .steps-segment:not(:last-child):after,.steps.is-medium:not(.is-horizontal):not(.is-thin) .steps-segment.has-gaps:not(:last-child):after{top:2.8rem;bottom:.3rem}}.steps.is-medium.is-vertical{display:flex;flex-direction:column}.steps.is-medium.is-vertical .steps-segment:not(:last-child):after{bottom:-.24rem;left:calc(1.25rem - (.2em));top:2.26rem;width:.4em}.steps.is-medium.is-vertical .steps-content{margin-left:calc(1.25rem + .5em);margin-top:-2.5rem;padding-left:1em;padding-bottom:1em}.steps.is-medium.is-vertical .steps-content.is-divider-content{margin-top:0;padding-bottom:0}.steps.is-medium.is-vertical.has-content-centered .steps-content{padding-top:calc(1.25rem - .5em)}.steps.is-medium.is-vertical:not(.is-thin).has-gaps .steps-segment:not(:last-child):after,.steps.is-medium.is-vertical:not(.is-thin) .steps-segment.has-gaps:not(:last-child):after{top:2.8rem;bottom:.3rem}@media screen and (min-width: 769px), print{.steps.is-medium:not(.is-vertical) .steps-segment:not(:last-child):after{height:.4em;left:2.26rem;right:-.24rem;top:calc(1.25rem - (.2em))}.steps.is-medium:not(.is-vertical).has-content-above .steps-segment:not(:last-child)::after{bottom:calc(1.25rem - (.2em));top:auto}.steps.is-medium:not(.is-vertical) .extra-data{left:calc(50% + 1.55rem);right:calc(-50% + 1.55rem);bottom:100%;position:absolute}.steps.is-medium:not(.is-vertical) .extra-data.has-overflow-right{overflow:visible;right:auto;white-space:nowrap;min-width:calc(100% - 1.25rem - (.2em))}.steps.is-medium:not(.is-vertical) .extra-data.has-overflow-left{overflow:visible;left:auto;white-space:nowrap;min-width:calc(100% - 1.25rem - (.2em))}.steps.is-medium:not(.is-vertical) .extra-data.has-overflow-centered{overflow:visible;left:auto;white-space:nowrap;min-width:calc(100% - 1.25rem - (.2em))}.steps.is-medium:not(.is-vertical).has-content-above .extra-data{top:100%;bottom:auto}.steps.is-medium:not(.is-vertical) .steps-content{margin-left:1.25rem}.steps.is-medium:not(.is-vertical) .steps-content:not(:last-child){margin-right:-1.25rem}.steps.is-medium:not(.is-vertical) .steps-content.is-divider-content{margin-right:-1.25rem;padding-left:2em;padding-right:2em}.steps.is-medium:not(.is-vertical).has-content-centered .steps-segment:not(:last-child):after{left:50%;right:-50%}.steps.is-medium:not(.is-vertical).has-content-centered .steps-marker{position:absolute;left:calc(50% - 1.25rem)}.steps.is-medium:not(.is-vertical).has-content-centered .steps-content{margin-top:2.5rem;margin-left:.5em;margin-right:.5em;padding-top:.2em}.steps.is-medium:not(.is-vertical).has-content-above.has-content-centered .steps-content{margin-bottom:2.5rem;padding-bottom:.2em}.steps.is-medium:not(.is-vertical):not(.is-thin).has-gaps .steps-segment:not(:last-child):after,.steps.is-medium:not(.is-vertical):not(.is-thin) .steps-segment.has-gaps:not(:last-child):after{left:2.8rem;right:.3rem}.steps.is-medium:not(.is-vertical):not(.is-thin).has-content-centered.has-gaps .steps-segment:not(:last-child):after,.steps.is-medium:not(.is-vertical):not(.is-thin).has-content-centered .steps-segment.has-gaps:not(:last-child):after{left:calc(50% + 1.55rem);right:calc(-50% + 1.55rem)}}.steps.is-medium.is-horizontal .steps-segment:not(:last-child):after{height:.4em;left:2.26rem;right:-.24rem;top:calc(1.25rem - (.2em))}.steps.is-medium.is-horizontal.has-content-above .steps-segment:not(:last-child)::after{bottom:calc(1.25rem - (.2em));top:auto}.steps.is-medium.is-horizontal .extra-data{left:calc(50% + 1.55rem);right:calc(-50% + 1.55rem);bottom:100%;position:absolute}.steps.is-medium.is-horizontal .extra-data.has-overflow-right{overflow:visible;right:auto;white-space:nowrap;min-width:calc(100% - 1.25rem - (.2em))}.steps.is-medium.is-horizontal .extra-data.has-overflow-left{overflow:visible;left:auto;white-space:nowrap;min-width:calc(100% - 1.25rem - (.2em))}.steps.is-medium.is-horizontal .extra-data.has-overflow-centered{overflow:visible;left:auto;white-space:nowrap;min-width:calc(100% - 1.25rem - (.2em))}.steps.is-medium.is-horizontal.has-content-above .extra-data{top:100%;bottom:auto}.steps.is-medium.is-horizontal .steps-content{margin-left:1.25rem}.steps.is-medium.is-horizontal .steps-content:not(:last-child){margin-right:-1.25rem}.steps.is-medium.is-horizontal .steps-content.is-divider-content{margin-right:-1.25rem;padding-left:2em;padding-right:2em}.steps.is-medium.is-horizontal.has-content-centered .steps-segment:not(:last-child):after{left:50%;right:-50%}.steps.is-medium.is-horizontal.has-content-centered .steps-marker{position:absolute;left:calc(50% - 1.25rem)}.steps.is-medium.is-horizontal.has-content-centered .steps-content{margin-top:2.5rem;margin-left:.5em;margin-right:.5em;padding-top:.2em}.steps.is-medium.is-horizontal.has-content-above.has-content-centered .steps-content{margin-bottom:2.5rem;padding-bottom:.2em}.steps.is-medium.is-horizontal:not(.is-thin).has-gaps .steps-segment:not(:last-child):after,.steps.is-medium.is-horizontal:not(.is-thin) .steps-segment.has-gaps:not(:last-child):after{left:2.8rem;right:.3rem}.steps.is-medium.is-horizontal:not(.is-thin).has-content-centered.has-gaps .steps-segment:not(:last-child):after,.steps.is-medium.is-horizontal:not(.is-thin).has-content-centered .steps-segment.has-gaps:not(:last-child):after{left:calc(50% + 1.55rem);right:calc(-50% + 1.55rem)}.steps.is-large{font-size:1.5rem}.steps.is-large .steps-marker{height:3rem;width:3rem;overflow:hidden}@media screen and (max-width: 768px){.steps.is-large:not(.is-horizontal){display:flex;flex-direction:column}.steps.is-large:not(.is-horizontal) .steps-segment:not(:last-child):after{bottom:-.24rem;left:calc(1.5rem - (.2em));top:2.76rem;width:.4em}.steps.is-large:not(.is-horizontal) .steps-content{margin-left:calc(1.5rem + .5em);margin-top:-3rem;padding-left:1em;padding-bottom:1em}.steps.is-large:not(.is-horizontal) .steps-content.is-divider-content{margin-top:0;padding-bottom:0}.steps.is-large:not(.is-horizontal).has-content-centered .steps-content{padding-top:calc(1.5rem - .5em)}.steps.is-large:not(.is-horizontal):not(.is-thin).has-gaps .steps-segment:not(:last-child):after,.steps.is-large:not(.is-horizontal):not(.is-thin) .steps-segment.has-gaps:not(:last-child):after{top:3.3rem;bottom:.3rem}}.steps.is-large.is-vertical{display:flex;flex-direction:column}.steps.is-large.is-vertical .steps-segment:not(:last-child):after{bottom:-.24rem;left:calc(1.5rem - (.2em));top:2.76rem;width:.4em}.steps.is-large.is-vertical .steps-content{margin-left:calc(1.5rem + .5em);margin-top:-3rem;padding-left:1em;padding-bottom:1em}.steps.is-large.is-vertical .steps-content.is-divider-content{margin-top:0;padding-bottom:0}.steps.is-large.is-vertical.has-content-centered .steps-content{padding-top:calc(1.5rem - .5em)}.steps.is-large.is-vertical:not(.is-thin).has-gaps .steps-segment:not(:last-child):after,.steps.is-large.is-vertical:not(.is-thin) .steps-segment.has-gaps:not(:last-child):after{top:3.3rem;bottom:.3rem}@media screen and (min-width: 769px), print{.steps.is-large:not(.is-vertical) .steps-segment:not(:last-child):after{height:.4em;left:2.76rem;right:-.24rem;top:calc(1.5rem - (.2em))}.steps.is-large:not(.is-vertical).has-content-above .steps-segment:not(:last-child)::after{bottom:calc(1.5rem - (.2em));top:auto}.steps.is-large:not(.is-vertical) .extra-data{left:calc(50% + 1.8rem);right:calc(-50% + 1.8rem);bottom:100%;position:absolute}.steps.is-large:not(.is-vertical) .extra-data.has-overflow-right{overflow:visible;right:auto;white-space:nowrap;min-width:calc(100% - 1.5rem - (.2em))}.steps.is-large:not(.is-vertical) .extra-data.has-overflow-left{overflow:visible;left:auto;white-space:nowrap;min-width:calc(100% - 1.5rem - (.2em))}.steps.is-large:not(.is-vertical) .extra-data.has-overflow-centered{overflow:visible;left:auto;white-space:nowrap;min-width:calc(100% - 1.5rem - (.2em))}.steps.is-large:not(.is-vertical).has-content-above .extra-data{top:100%;bottom:auto}.steps.is-large:not(.is-vertical) .steps-content{margin-left:1.5rem}.steps.is-large:not(.is-vertical) .steps-content:not(:last-child){margin-right:-1.5rem}.steps.is-large:not(.is-vertical) .steps-content.is-divider-content{margin-right:-1.5rem;padding-left:2em;padding-right:2em}.steps.is-large:not(.is-vertical).has-content-centered .steps-segment:not(:last-child):after{left:50%;right:-50%}.steps.is-large:not(.is-vertical).has-content-centered .steps-marker{position:absolute;left:calc(50% - 1.5rem)}.steps.is-large:not(.is-vertical).has-content-centered .steps-content{margin-top:3rem;margin-left:.5em;margin-right:.5em;padding-top:.2em}.steps.is-large:not(.is-vertical).has-content-above.has-content-centered .steps-content{margin-bottom:3rem;padding-bottom:.2em}.steps.is-large:not(.is-vertical):not(.is-thin).has-gaps .steps-segment:not(:last-child):after,.steps.is-large:not(.is-vertical):not(.is-thin) .steps-segment.has-gaps:not(:last-child):after{left:3.3rem;right:.3rem}.steps.is-large:not(.is-vertical):not(.is-thin).has-content-centered.has-gaps .steps-segment:not(:last-child):after,.steps.is-large:not(.is-vertical):not(.is-thin).has-content-centered .steps-segment.has-gaps:not(:last-child):after{left:calc(50% + 1.8rem);right:calc(-50% + 1.8rem)}}.steps.is-large.is-horizontal .steps-segment:not(:last-child):after{height:.4em;left:2.76rem;right:-.24rem;top:calc(1.5rem - (.2em))}.steps.is-large.is-horizontal.has-content-above .steps-segment:not(:last-child)::after{bottom:calc(1.5rem - (.2em));top:auto}.steps.is-large.is-horizontal .extra-data{left:calc(50% + 1.8rem);right:calc(-50% + 1.8rem);bottom:100%;position:absolute}.steps.is-large.is-horizontal .extra-data.has-overflow-right{overflow:visible;right:auto;white-space:nowrap;min-width:calc(100% - 1.5rem - (.2em))}.steps.is-large.is-horizontal .extra-data.has-overflow-left{overflow:visible;left:auto;white-space:nowrap;min-width:calc(100% - 1.5rem - (.2em))}.steps.is-large.is-horizontal .extra-data.has-overflow-centered{overflow:visible;left:auto;white-space:nowrap;min-width:calc(100% - 1.5rem - (.2em))}.steps.is-large.is-horizontal.has-content-above .extra-data{top:100%;bottom:auto}.steps.is-large.is-horizontal .steps-content{margin-left:1.5rem}.steps.is-large.is-horizontal .steps-content:not(:last-child){margin-right:-1.5rem}.steps.is-large.is-horizontal .steps-content.is-divider-content{margin-right:-1.5rem;padding-left:2em;padding-right:2em}.steps.is-large.is-horizontal.has-content-centered .steps-segment:not(:last-child):after{left:50%;right:-50%}.steps.is-large.is-horizontal.has-content-centered .steps-marker{position:absolute;left:calc(50% - 1.5rem)}.steps.is-large.is-horizontal.has-content-centered .steps-content{margin-top:3rem;margin-left:.5em;margin-right:.5em;padding-top:.2em}.steps.is-large.is-horizontal.has-content-above.has-content-centered .steps-content{margin-bottom:3rem;padding-bottom:.2em}.steps.is-large.is-horizontal:not(.is-thin).has-gaps .steps-segment:not(:last-child):after,.steps.is-large.is-horizontal:not(.is-thin) .steps-segment.has-gaps:not(:last-child):after{left:3.3rem;right:.3rem}.steps.is-large.is-horizontal:not(.is-thin).has-content-centered.has-gaps .steps-segment:not(:last-child):after,.steps.is-large.is-horizontal:not(.is-thin).has-content-centered .steps-segment.has-gaps:not(:last-child):after{left:calc(50% + 1.8rem);right:calc(-50% + 1.8rem)}.steps-segment:after{background-color:#d6d6d6}.steps-segment.is-active:after{background-color:#dbdbdb}.steps-segment.is-active ~ .steps-segment:after{background-color:#dbdbdb}.steps:not(.is-hollow) .steps-marker:not(.is-hollow){background-color:#d6d6d6;color:#fff}.steps:not(.is-hollow) .steps-segment.is-active .steps-marker:not(.is-hollow){background-color:#d6d6d6;color:#fff}.steps:not(.is-hollow) .steps-segment.is-active ~ .steps-segment .steps-marker:not(.is-hollow){background-color:#dbdbdb;color:rgba(0,0,0,0.7)}.steps.is-hollow .steps-marker,.steps-marker.is-hollow{border:.3em solid #d6d6d6}.steps.is-hollow .is-active .steps-marker,.steps .is-active .steps-marker.is-hollow{border-color:#d6d6d6}.steps.is-hollow .steps-segment.is-active ~ .steps-segment .steps-marker,.steps-segment.is-active ~ .steps-segment .steps-marker.is-hollow{border-color:#dbdbdb}.steps:not(.is-hollow) .steps-marker:not(.is-hollow).is-white{background-color:#fff !important;color:#0a0a0a !important}.steps.is-hollow .steps-marker.is-white,.steps .steps-marker.is-hollow.is-white{border-color:#fff !important}.steps:not(.is-hollow) .steps-marker:not(.is-hollow).is-black{background-color:#0a0a0a !important;color:#fff !important}.steps.is-hollow .steps-marker.is-black,.steps .steps-marker.is-hollow.is-black{border-color:#0a0a0a !important}.steps:not(.is-hollow) .steps-marker:not(.is-hollow).is-light{background-color:#f5f5f5 !important;color:#363636 !important}.steps.is-hollow .steps-marker.is-light,.steps .steps-marker.is-hollow.is-light{border-color:#f5f5f5 !important}.steps:not(.is-hollow) .steps-marker:not(.is-hollow).is-dark{background-color:#363636 !important;color:#f5f5f5 !important}.steps.is-hollow .steps-marker.is-dark,.steps .steps-marker.is-hollow.is-dark{border-color:#363636 !important}.steps:not(.is-hollow) .steps-marker:not(.is-hollow).is-primary{background-color:#00d1b2 !important;color:#fff !important}.steps.is-hollow .steps-marker.is-primary,.steps .steps-marker.is-hollow.is-primary{border-color:#00d1b2 !important}.steps:not(.is-hollow) .steps-marker:not(.is-hollow).is-link{background-color:#3273dc !important;color:#fff !important}.steps.is-hollow .steps-marker.is-link,.steps .steps-marker.is-hollow.is-link{border-color:#3273dc !important}.steps:not(.is-hollow) .steps-marker:not(.is-hollow).is-info{background-color:#209cee !important;color:#fff !important}.steps.is-hollow .steps-marker.is-info,.steps .steps-marker.is-hollow.is-info{border-color:#209cee !important}.steps:not(.is-hollow) .steps-marker:not(.is-hollow).is-success{background-color:#d6d6d6 !important;color:#fff !important}.steps.is-hollow .steps-marker.is-success,.steps .steps-marker.is-hollow.is-success{border-color:#d6d6d6 !important}.steps:not(.is-hollow) .steps-marker:not(.is-hollow).is-warning{background-color:#ffdd57 !important;color:rgba(0,0,0,0.7) !important}.steps.is-hollow .steps-marker.is-warning,.steps .steps-marker.is-hollow.is-warning{border-color:#ffdd57 !important}.steps:not(.is-hollow) .steps-marker:not(.is-hollow).is-danger{background-color:#ff3860 !important;color:#fff !important}.steps.is-hollow .steps-marker.is-danger,.steps .steps-marker.is-hollow.is-danger{border-color:#ff3860 !important}@media screen and (max-width: 768px){.steps:not(.is-horizontal).is-dashed .steps-segment:after,.steps:not(.is-horizontal) .steps-segment.is-dashed:after{background:repeating-linear-gradient(0deg, #d6d6d6, #d6d6d6 5px, transparent 5px, transparent 10px)}.steps:not(.is-horizontal).is-dashed .steps-segment.is-active:after,.steps:not(.is-horizontal).is-dashed .steps-segment.is-active ~ .steps-segment:after,.steps:not(.is-horizontal) .steps-segment.is-active.is-dashed:after,.steps:not(.is-horizontal) .steps-segment.is-active ~ .steps-segment.is-dashed:after{background:repeating-linear-gradient(0deg, #dbdbdb, #dbdbdb 5px, transparent 5px, transparent 10px)}}.steps.is-vertical.is-dashed .steps-segment:after,.steps.is-vertical .steps-segment.is-dashed:after{background:repeating-linear-gradient(0deg, #d6d6d6, #d6d6d6 5px, transparent 5px, transparent 10px)}.steps.is-vertical.is-dashed .steps-segment.is-active:after,.steps.is-vertical.is-dashed .steps-segment.is-active ~ .steps-segment:after,.steps.is-vertical .steps-segment.is-active.is-dashed:after,.steps.is-vertical .steps-segment.is-active ~ .steps-segment.is-dashed:after{background:repeating-linear-gradient(0deg, #dbdbdb, #dbdbdb 5px, transparent 5px, transparent 10px)}@media screen and (min-width: 769px), print{.steps:not(.is-vertical).is-dashed .steps-segment:after,.steps:not(.is-vertical) .steps-segment.is-dashed:after{background:repeating-linear-gradient(90deg, #d6d6d6, #d6d6d6 10px, transparent 10px, transparent 20px)}.steps:not(.is-vertical).is-dashed .steps-segment.is-active:after,.steps:not(.is-vertical).is-dashed .steps-segment.is-active ~ .steps-segment:after,.steps:not(.is-vertical) .steps-segment.is-active.is-dashed:after,.steps:not(.is-vertical) .steps-segment.is-active ~ .steps-segment.is-dashed:after{background:repeating-linear-gradient(90deg, #dbdbdb, #dbdbdb 10px, transparent 10px, transparent 20px)}}.steps.is-horizontal.is-dashed .steps-segment:after,.steps.is-horizontal .steps-segment.is-dashed:after{background:repeating-linear-gradient(90deg, #d6d6d6, #d6d6d6 10px, transparent 10px, transparent 20px)}.steps.is-horizontal.is-dashed .steps-segment.is-active:after,.steps.is-horizontal.is-dashed .steps-segment.is-active ~ .steps-segment:after,.steps.is-horizontal .steps-segment.is-active.is-dashed:after,.steps.is-horizontal .steps-segment.is-active ~ .steps-segment.is-dashed:after{background:repeating-linear-gradient(90deg, #dbdbdb, #dbdbdb 10px, transparent 10px, transparent 20px)}.steps.is-thin .steps-marker{width:.8em;height:.8em}.steps.is-thin.is-hollow .steps-marker,.steps.is-thin .steps-marker.is-hollow{border-width:1px;height:calc(.8em + 1px);width:calc(.8em + 1px)}@media screen and (max-width: 768px){.steps.is-thin:not(.is-horizontal) .steps-segment:not(:last-child):after{bottom:0;left:calc(.4em - .5px);top:.8em;width:1px}.steps.is-thin:not(.is-horizontal) .steps-content{margin-top:-1.2em;margin-left:.8em}.steps.is-thin:not(.is-horizontal).has-gaps .steps-segment:not(:last-child):after,.steps.is-thin:not(.is-horizontal) .steps-segment.has-gaps:not(:last-child):after{bottom:.4em;top:1.2em}.steps.is-thin:not(.is-horizontal).has-content-centered .steps-content{padding-top:1.6em}}.steps.is-thin.is-vertical .steps-segment:not(:last-child):after{bottom:0;left:calc(.4em - .5px);top:.8em;width:1px}.steps.is-thin.is-vertical .steps-content{margin-top:-1.2em;margin-left:.8em}.steps.is-thin.is-vertical.has-gaps .steps-segment:not(:last-child):after,.steps.is-thin.is-vertical .steps-segment.has-gaps:not(:last-child):after{bottom:.4em;top:1.2em}.steps.is-thin.is-vertical.has-content-centered .steps-content{padding-top:1.6em}@media screen and (min-width: 769px), print{.steps.is-thin:not(.is-vertical) .steps-segment:not(:last-child):after{left:.8em;right:0;top:calc(.4em - .5px);height:1px}.steps.is-thin:not(.is-vertical).has-content-above .steps-segment:not(:last-child)::after{bottom:calc(.4em - .5px);top:auto}.steps.is-thin:not(.is-vertical) .steps-content{margin-top:.8em}.steps.is-thin:not(.is-vertical).has-content-centered .steps-segment:not(:last-child):after{left:calc(50% + .4em);right:calc(-50% + .4em)}.steps.is-thin:not(.is-vertical).has-content-centered .steps-marker{position:absolute;left:calc(50% - .4em)}.steps.is-thin:not(.is-vertical).has-gaps .steps-segment:not(:last-child):after,.steps.is-thin:not(.is-vertical) .steps-segment.has-gaps:not(:last-child):after{left:1.2em;right:.4em}.steps.is-thin:not(.is-vertical).has-content-centered.has-gaps .steps-segment:not(:last-child):after,.steps.is-thin:not(.is-vertical).has-content-centered .steps-segment.has-gaps:not(:last-child):after{left:calc(50% + .8em);right:calc(-50% + .8em)}}.steps.is-thin.is-horizontal .steps-segment:not(:last-child):after{left:.8em;right:0;top:calc(.4em - .5px);height:1px}.steps.is-thin.is-horizontal.has-content-above .steps-segment:not(:last-child)::after{bottom:calc(.4em - .5px);top:auto}.steps.is-thin.is-horizontal .steps-content{margin-top:.8em}.steps.is-thin.is-horizontal.has-content-centered .steps-segment:not(:last-child):after{left:calc(50% + .4em);right:calc(-50% + .4em)}.steps.is-thin.is-horizontal.has-content-centered .steps-marker{position:absolute;left:calc(50% - .4em)}.steps.is-thin.is-horizontal.has-gaps .steps-segment:not(:last-child):after,.steps.is-thin.is-horizontal .steps-segment.has-gaps:not(:last-child):after{left:1.2em;right:.4em}.steps.is-thin.is-horizontal.has-content-centered.has-gaps .steps-segment:not(:last-child):after,.steps.is-thin.is-horizontal.has-content-centered .steps-segment.has-gaps:not(:last-child):after{left:calc(50% + .8em);right:calc(-50% + .8em)}.steps:not(.is-vertical).has-content-above .steps-segment{display:flex;flex-direction:column-reverse}.steps:not(.is-vertical).has-content-above .steps-segment .steps-content{margin-top:0;padding-top:0;display:flex;flex-direction:column-reverse}
      </style>
        </body>
      </html>
      <script>
      var element = document.getElementById('body');
  html2pdf().from(element).then(()=>{document.getElementById("loading").innerHTML=""}).save();
      </script>
      `)
      
  }