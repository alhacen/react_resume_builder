import React from 'react';
const Footer = () =>{
    return(
        <footer class="footer" style={{'marginTop':'100px'}}>
            <div class="content has-text-centered" style={{'textAlign':'center'}}>
            © React Resume Builder<br />This page is open source. Noticed a typo? Or Bug?
                <br />
                <a href="https://github.com/alhaqhassan/react_resume_builder">Improve this page on GitHub</a>.
            </div>
        </footer>
    )
}
export default Footer;