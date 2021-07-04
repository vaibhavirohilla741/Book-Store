import React, { Component } from "react";
import CardUI from "./CardUI";
import mysteryCover from "../../assets/images/Book Covers/mystery.jfif";
import comedyCover from "../../assets/images/Book Covers/comedy.jpg";
import romanceCover from "../../assets/images/Book Covers/romance.jpg";

export class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <CardUI
              title="Mystery"
              imgsrc={mysteryCover}
              about="Mystery is a fiction genre where the nature of an event, usually a murder or other crime, remains mysterious until the end of the story."
              button="Check Out"
            />
          </div>
          <div className="col-md-4">
            <CardUI
              title="Comedy"
              imgsrc={comedyCover}
              about="Comedy is a genre discourses or works itended to be humorous or amusing by inducing laughter, or any other entertainment medium."
              button="Check Out"
            />
          </div>
          <div className="col-md-4">
            <CardUI
              title="Romance"
              imgsrc={romanceCover}
              about=" the last decade, New Adult describes the group of romance readers between the ages of 18-29 (or people just coming into adulthood)."
              button="Check Out"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
