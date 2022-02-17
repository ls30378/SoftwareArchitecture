import "./comment-container.styles.css";

const CommentContainer = () => {
  return (
    <div className="comment-container">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
        accusantium! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nisi tempore blanditiis a cumque repellat aliquam voluptatibus
        laudantium dolores ratione velit, delectus nihil, esse inventore ipsa
        vel maxime aspernatur! Ipsum dolore suscipit est eveniet quidem aliquam
        officia accusantium dolor maiores quo exercitationem corrupti aperiam
        corporis nam, odio pariatur soluta quasi ipsa. Illum corporis nesciunt
        quas nulla ad dolore harum blanditiis iusto, vero fuga laboriosam
        dolorem? Quisquam molestiae praesentium illo, quaerat sed distinctio
        optio eaque, facere aperiam neque accusantium provident saepe non
        delectus consectetur corporis laudantium impedit perspiciatis id,
        officia deserunt unde ad nemo doloribus. Sunt, corrupti! Consectetur
        doloribus explicabo quas quibusdam. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Repellat sequi itaque velit eligendi ex.
        Delectus aut commodi unde velit vero! Magni a ipsum culpa? Recusandae
        dolore veniam doloremque quam mollitia vero sit? Atque error odit
        officiis dignissimos delectus accusantium eaque id placeat sit omnis
        rerum voluptatum illum, ad deleniti dolorem deserunt illo, iste qui
        commodi animi vero earum quod porro impedit? Illum sit aut beatae
        dolorum temporibus cum quisquam iure, voluptatem delectus vel non
        ratione assumenda ipsam impedit voluptates perferendis tempore
        accusantium vitae rerum molestias consectetur tenetur. Quos delectus
        incidunt nisi cupiditate amet rerum. Nemo consectetur aut quos vero
        magni. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
        maxime culpa dolorum corrupti sequi vitae error, fugit commodi?
        Accusamus numquam qui animi tempore porro quod! Adipisci neque nisi quis
        deleniti incidunt ullam quidem placeat illum exercitationem ratione
        consectetur, libero dolore sint tenetur odit officia iusto voluptatem
        voluptate culpa fugiat odio accusamus? Nobis perspiciatis quam harum
        omnis quaerat officia ipsum enim incidunt nihil accusantium? Libero
        nihil incidunt eos ea soluta eaque excepturi aut tempora officiis
        molestias hic optio consequatur consectetur quo, accusamus architecto
        neque pariatur itaque atque! Error dolor odio incidunt eveniet
        repellendus eos consequuntur dolorum fugiat! Ad corrupti placeat
        quisquam.
      </p>
      <form>
        <label htmlFor="komenti">Komenti</label>
        <textarea
          style={{ resize: "none" }}
          name="Komenti"
          id="komenti"
          cols="70"
          rows="10"
        ></textarea>
        <div className="comment-bottom">
          <button className="comment-btn">Post</button>
          <div>
            <label htmlFor="emri">Emri</label>
            <input required type="text" name="Emri" id="emri" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CommentContainer;
