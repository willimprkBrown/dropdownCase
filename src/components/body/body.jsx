import { useState } from "react";

//screenshots of different applications x

//input table x
//output table x

//state model mouse x
//state model keyboard x

//state model mouse revision x
//state model keyboard revision x

//2 annotated designs for revised component

//reflection

import docs1 from "../../assets/docs1.png";
import docs2 from "../../assets/docs2.png";
import docs3 from "../../assets/docs3.png";

import vs1 from "../../assets/vs1.png";
import vs2 from "../../assets/vs2.png";
import vs3 from "../../assets/vs3.png";

import np1 from "../../assets/np1.png";
import np2 from "../../assets/np2.png";
import np3 from "../../assets/np3.png";

import outputTable from "../../assets/outputTable.png";
import inputTable from "../../assets/inputTable.png";

import mouseModel1 from "../../assets/mouseModel1.png";
import mouseModel2 from "../../assets/mouseModel2.png";

import keyboardModel1 from "../../assets/keyboardModel1.png";
import keyboardModel2 from "../../assets/keyboardModel2.png";

import annotatedAccess from "../../assets/annotatedAccess.png";
import annotatedInitial from "../../assets/annotatedInitial.png";

import { docsCaptions, notepadCaptions } from "./descriptions";

import "./body.css";

const Carousel = ({ images, captions }) => {
  const [index, setIndex] = useState(0);

  const nextImage = () => setIndex((index + 1) % images.length);
  const prevImage = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div className="carousel">
      <button onClick={prevImage} className="carousel-btn left">
        ◀
      </button>
      <div className="carousel-image">
        <img src={images[index]} alt={captions[index]} />
        <p className="caption">{captions[index]}</p>
      </div>
      <button onClick={nextImage} className="carousel-btn right">
        ▶
      </button>
    </div>
  );
};

const Body = () => {
  return (
    <section className="body">
      <h1>Dropdown Menus</h1>
      <p>
        This is a case study on dropdown menus. This study will analyze
        dropdowns from Google Docs, VSCode, and Notepad, looking at how each
        deals with inputs and what outputs are shown. Notepad will be the main
        focus of the study. State models for mouse and keyboard interactions
        will be shown, revised, and discussed. Then, a revised component will be
        designed and discussed, improving on the initial design. Finally, there
        will be a reflection on Kat Holmes’ Inclusive Design video.
      </p>
      <h1>Case 1: Google Docs</h1>
      <Carousel images={[docs1, docs2, docs3]} captions={docsCaptions} />

      <h1>Case 2: VSCode</h1>
      <Carousel images={[vs1, vs2, vs3]} captions={docsCaptions} />

      <h1>Case 3: Notepad</h1>
      <Carousel images={[np1, np3, np2]} captions={notepadCaptions} />

      <h1>Input Table</h1>
      <p>Observations of inputs in the three case studies</p>
      <img src={inputTable} alt="Input Table" />

      <h1>Output Table</h1>
      <p>Observations of outputs in the three case studies</p>
      <img src={outputTable} alt="Output Table" />

      <h1>Mouse State Model</h1>
      <Carousel
        images={[mouseModel1, mouseModel2]}
        captions={[
          "Initial Mouse State Model Diagram",
          "Revised Mouse State Model Diagram: Added unfocusing feature when mouse click is held over a button for 3 seconds. This is to improve accessibility and learnability. If a user accidentally clicks on a button and does not know how to not perform that action, inaction will lead to unfocusing the button and not performing the action. May increase user confusion and reduce efficiency in cases where user is intentionally holding down a button.",
        ]}
      />

      <h1>Keyboard State Model</h1>
      <Carousel
        images={[keyboardModel1, keyboardModel2]}
        captions={[
          "Initial Keyboard State Model Diagram",
          "Revised Keyboard State Model Diagram: Similar to added mouse feature, but will change the state from active to default, removing the focusing to indicate the button will no longer be pressed. This is to improve accessibility and learnability. If a user accidentally presses a button and does not know how to not perform that action, inaction will lead to unfocusing the button and not performing the action. May increase user confusion and reduce efficiency in cases where user is intentionally holding down a button. Shortcut keys also can be held down and act similarly to the enter key, further improving the continuity of the component.",
        ]}
      />

      <h1>Revised Component</h1>
      <Carousel
        images={[annotatedInitial, annotatedAccess]}
        captions={[
          "Initial State: 1. Shortcuts are added to every action. Previoulsy missing from Page setup and Exit. Improves the continuity of the component and efficiency of the component.",
          "After opening dropdown with keyboard shortcut: 1. Removed keyboard shortcuts from the left and underlined letters in each button that represent their respective shortcut key. This design was found in the other applications in the case study and improves the consistency and learnability of the component. Shortcuts feel more integrated into the component and are more easily discoverable.",
        ]}
      />

      <h1>Reflection</h1>
      <ul>
        <li>
          <strong>
            Where did the components you observed do well in terms of usability
            and accessibility? How have you applied this to your design?
          </strong>
          <p>
            The components were usable for keyboard-only and mouse-only users,
            displaying separate menus for each type of user to provide the most
            tailored experience possible. I wanted to bring this style of design
            into my component, detailing buttons to make them accessible and
            learnable for keyboard-only users, while maintaining a clean and
            intuitive design for mouse-only users.
          </p>
        </li>
        <li>
          <strong>
            Are there accessibility considerations that were not addressed that
            you accounted for in your own component design?
          </strong>
          <p>
            My revisions increased the accessibility and learnability of the
            component for users who may not be as familiar with technology or
            have impaired hand function.
          </p>
        </li>
        <li>
          <strong>
            How does the change you’ve made in your own design solve for a
            “mismatch” in our world?
          </strong>
          <p>
            The change in the state models for both keyboard-only and mouse-only
            users solves a mismatch by providing alternate methods of canceling
            an action (holding down the activation key). Users who have impaired
            hand function may accidentally press a button, but can safely cancel
            the action by holding down the button instead of blindly moving the
            mouse around or pressing other keys in hopes that it will cancel
            their action.
          </p>
        </li>
        <li>
          <strong>
            Give two examples of how the accessibility/inaccessibility of those
            inputs or outputs could also impact users with impairments either
            positively or negatively, respectively.
          </strong>
          <p>
            In Google Docs, you can navigate through different components with
            the tab key or arrow keys, however, the order in which components
            are focused is confusing and it becomes hard to navigate to a
            specific button. For example, I cannot reach the help button with
            the tab key, so there is very little learnability and negatively
            impacts the user experience. In Notepad, when hovering over a
            button, the button color is changed but does not contrast highly
            with neighboring components, making it difficult to tell if it is
            being hovered over, negatively impacting visually impaired users.
          </p>
        </li>
        <li>
          <strong>
            Between mouse, keyboard, touch/mobile, and screen reader users,
            which do you think are most commonly prioritized in the process of
            creating components? How might this impact the user experience?
          </strong>
          <p>
            I would think that mouse users are most commonly prioritized. This
            would lead to a bias towards designing components for mouse users
            and only later designing for other users as an afterthought, leading
            to potentially forced and unfriendly designs for such users.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Body;
