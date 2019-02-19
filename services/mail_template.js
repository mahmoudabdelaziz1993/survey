const keys = require('../config/keys');
module.exports = (survey) => {
    return `
    <html>
       <body>
          <div style ="text-align:center;">
             <h3> we would like to know !</h3>
             <p>${survey.body}</p>
             <div>
                 <a href ="${keys.redirect_domain}/api/voting">yes</a>
             </div>
             <div>
                  <a href ="${keys.redirect_domain}/api/voting">no</a>
             </div>
          </div>
</body>
</html>
    `;
}