import emailjs from 'emailjs-com';
import React from 'react';


const About = () => {
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_wco0ss6', 'template_f9ar9zo', e.target, 'uX_z-9_6PbAb24o0e')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    };
    return (
        <div>
            <h1>A propos</h1>
            <br />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum dolorum quisquam odio, molestias enim, itaque, ex dolore quam optio error accusantium vel dicta iste atque earum quod totam eaque minima rem laboriosam architecto? Nemo, magnam exercitationem ea reprehenderit minus incidunt. Corrupti numquam molestiae quidem? Deserunt recusandae quibusdam qui illo accusantium harum aliquam omnis nihil ipsam, temporibus esse? Voluptatum consequuntur, accusantium laudantium animi autem commodi. Nihil dolorum odio quas! Aut dolorem corrupti obcaecati cupiditate, soluta inventore tempora aspernatur optio temporibus, distinctio expedita, error libero odit dignissimos dolore mollitia provident. Quidem consequuntur illum eveniet possimus tempore enim modi facilis fugiat. Ad, quasi.</p>
            <br />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptates facilis optio veritatis, fugiat error quibusdam consequatur nam unde sed nesciunt autem suscipit quod rem quia commodi! Iure ex mollitia aut commodi assumenda, sit, cumque eos est vitae, fugit possimus culpa quasi doloribus placeat maxime! Nemo debitis libero a cumque?
            </p>
            <div>
                <form onSubmit={sendEmail}>
                    <div>
                        <input type="text" name="user_email" />
                    </div>
                    <div>
                        <input type="submit" value="test" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default About;