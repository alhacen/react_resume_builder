export const Template = (data) =>{

    return (`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Hello Bulma!</title>
        
        <script src="https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js"></script>
      </head>
      <body>
    <div id="resume">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css">
        <section class="section">
            <h3 class="title" style="text-align:center">Resume</h3>
            <div id="a" style="padding:25px">_</div>
        </section>
    </div>
      </body>
    </html>
    <script>

    var data=`+JSON.stringify(data)+`
    console.log(data)
    document.getElementById("a").innerHTML=fun()
    console.log(fun())
    function fun(){
    
    return data.resume.data.map((data,datai)=>{
        return (\`<div class="columns is-tablet dataFields ">
                <div class="column is-5">
                    <h1 class="title ">`+"${data.name}"+`</h1>
                    
                </div>
                <div class="column ">\`+
    data.fields.map((input,index)=>{
    return input.map((input,fieldi)=>{
    return(\`<div className="padding15">
                                                <p className="font20 marginBottom5" ><strong>`+'${input.name.replace("-"," ")}</strong>: ${input.value}</p>'+`
    
                                            </div>\`)
    }).join("");
    }).join("")+
    
                \`</div>
            </div>
          <hr className="hr1"/>\`)
    
    }).join("")
    }
    
    
    var element = document.getElementById('resume');
html2pdf(element);

    </script>`)
    
}