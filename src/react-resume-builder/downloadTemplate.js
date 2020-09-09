export const Template = (data) =>{
console.log(data)
    return (`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>Hello World</title>
        <script src="https://unpkg.com/react@16/umd/react.development.js"></script>

        <script src="https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js"></script>
        <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
        
        <!-- Don't use this in production: -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css" >
      
      </head>
      <body id="a">
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
    const Education = () => {
       
      let data = getData("education-and-certification");
      if (isEmpty("education-and-certification")) {
        return /*#__PURE__*/React.createElement(React.Fragment, null);
    }
      return /*#__PURE__*/React.createElement("div", {
        class: "mt20"
      }, /*#__PURE__*/React.createElement("p", {
        class: "is-size-4"
      }, "Education"), data.fields.map((input, index) => {
        return /*#__PURE__*/React.createElement("div", {
          class: "p10"
        }, /*#__PURE__*/React.createElement("div", {
          id: "projectList"
        }, /*#__PURE__*/React.createElement("p", {
          class: "is-size-5 has-text-link has-text-weight-bold"
        }, getValue(input, 'college')), /*#__PURE__*/React.createElement("p", {
          class: ""
        }, getValue(input, 'degree'), ", ", new Date(getValue(input, 'date')).getFullYear())));
      }));
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
      }, getValue(getData("links").fields[0], "linkdin") ? /*#__PURE__*/React.createElement("p", {
        class: "spacing2"
      }, " ", /*#__PURE__*/React.createElement("span", {
        class: "has-text-weight-bold"
      }, "linkdin - "), " ", /*#__PURE__*/React.createElement("span", {
        class: "has-text-link "
      }, /*#__PURE__*/React.createElement("a", {
        href: getValue(getData("links").fields[0], "linkdin")
      }, getValue(getData("links").fields[0], "linkdin")))) : null)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
        id: "email"
      }, getValue(getData("basic").fields[0], "email-address")), /*#__PURE__*/React.createElement("td", {
        id: "sociallink2",
        class: "has-text-right"
      }, getValue(getData("links").fields[0], "github") ? /*#__PURE__*/React.createElement("p", {
        class: "spacing2"
      }, " ", /*#__PURE__*/React.createElement("span", {
        class: "has-text-weight-bold"
      }, "github - "), " ", /*#__PURE__*/React.createElement("span", {
        class: "has-text-link "
      }, /*#__PURE__*/React.createElement("a", {
        href: getValue(getData("links").fields[0], "github")
      }, getValue(getData("links").fields[0], "github")))) : null)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
        id: "name",
        class: "title "
      }, getValue(getData("basic").fields[0], "name")), /*#__PURE__*/React.createElement("hr", {
        class: "border2px"
      }), /*#__PURE__*/React.createElement("p", {
        id: "aboutMe"
      }, getValue(getData("basic").fields[0], "about"))), /*#__PURE__*/React.createElement(Education, null), /*#__PURE__*/React.createElement(Project, null), /*#__PURE__*/React.createElement(Achivements, null))));
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
    </style>
      </body>
    </html>
    <script>
    var element = document.getElementById('a');
html2pdf(element);
    </script>
    `)
    
}