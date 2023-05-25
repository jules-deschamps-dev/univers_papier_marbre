import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { dateParser, timestampParser } from "../assets/Utils";
import { deleteEvent, getEvents } from "../redux/actions/events.action";
import { UidContext } from "./AppContext";

const EventCard = ({ event }) => {
  const dispatch = useDispatch();
  const uid = useContext(UidContext);
  const path = event.link;

  const handleDelete = () => {
    dispatch(deleteEvent(event.id));
    dispatch(getEvents());
    window.location.reload();
  };
  return (
    <>
      <li key={event.id} className="eventsCard">
        <a href={path} target="_blank" rel="noreferrer" className="w-fit m-auto">
          <h2 className="hover:underline">{event.title}</h2>
        </a>
        <span>
          {dateParser(event.begin)} - {dateParser(event.end)} <br />-{timestampParser(event.end)} -
        </span>
        {event.placeLink ? (
          <a href={event.placeLink} target="_blank" rel="noreferrer" className=" flex w-fit m-auto">
            <div className="flex flex-col text-center justify-center translate-y-2 hover:underline">
              <img src="./img/icons/location-dot.svg" alt={event.title} className="h-4" />
              <h3> {event.place}</h3>
              <h4> - {event.city} - </h4>
            </div>
          </a>
        ) : null}

        {uid ? (
          <div className="relative m-auto flex">
            <img src="./img/icons/pen-circle.svg" alt="" className="h-8" />
            <img src="./img/icons/circle-trash.svg" alt="" onClick={handleDelete} className="h-8" />
          </div>
        ) : null}
      </li>
    </>
  );
};

export default EventCard;
