import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../redux/actions/events.action";
import { isEmpty } from "../assets/Utils";
import Nav from "../components/Nav";
import AdminPannel from "../components/AdminPannel";
import { UidContext } from "../components/AppContext";
import EventCard from "../components/EventCard";
import Loader from "../components/Loader";

const Events = () => {
  const [loadPost, setLoadPost] = useState(true);
  const dispatch = useDispatch();
  const events = useSelector((state) => state.eventsReducer);
  const uid = useContext(UidContext);

  useEffect(() => {
    if (loadPost) {
      dispatch(getEvents());
      setLoadPost(false);
    }
  }, [loadPost, dispatch]);

  return (
    <>
      {uid ? <AdminPannel /> : null}
      <Nav />
      {/* Actuellement */}

      {loadPost ? (
        <div id="loader-bloc">
          <Loader />
        </div>
      ) : (
        !isEmpty(events[0]) &&
        events
          .filter((element) => Date.parse(element.begin) < Date.now() && Date.parse(element.end) > Date.now())
          .slice(0, 1)
          .map((el) => {
            return (
              <>
                <div className="align-center"></div>
                <span className="text-2xl w-fit flex mt-8 m-auto text-center italic underline">Actuellement sur {el.city}</span>
                <ul className="flex flex-col flex-wrap m-auto mt-8 pl-10 pr-10 pb-20">
                  {!isEmpty(events[0]) &&
                    events
                      .filter((element) => Date.parse(element.begin) < Date.now() && Date.parse(element.end) > Date.now())
                      .slice(0)
                      .reverse()
                      .map((post) => {
                        return (
                          <>
                            <EventCard event={post} />
                          </>
                        );
                      })}
                </ul>
              </>
            );
          })
      )}

      {/* A venir */}
      {!isEmpty(events[0]) &&
        events
          .filter((element) => Date.parse(element.begin) > Date.now())
          .slice(0, 1)
          .map(() => {
            return (
              <>
                <span className="text-2xl w-fit flex mt-8 m-auto text-center italic underline">À venir</span>
                <ul className="flex flex-col flex-wrap m-auto mt-8 pl-10 pr-10 pb-20">
                  {!isEmpty(events[0]) &&
                    events
                      .filter((element) => Date.parse(element.begin) > Date.now())
                      .slice(0)
                      .reverse()
                      .map((post) => {
                        return (
                          <>
                            <EventCard event={post} />
                          </>
                        );
                      })}
                </ul>
              </>
            );
          })}

      {/* Passé */}
      {!isEmpty(events[0]) &&
        events
          .filter((element) => Date.parse(element.end) < Date.now())
          .slice(0, 1)
          .map(() => {
            return (
              <>
                <span className="text-2xl w-fit flex mt-8 m-auto text-center italic underline">Evenements passés</span>
                <ul className="flex flex-col flex-wrap m-auto mt-8 pl-10 pr-10 pb-20">
                  {!isEmpty(events[0]) &&
                    events
                      .filter((element) => Date.parse(element.end) < Date.now())
                      .slice(0)
                      .reverse()
                      .map((post) => {
                        return (
                          <>
                            <EventCard event={post} />
                          </>
                        );
                      })}
                </ul>
              </>
            );
          })}
    </>
  );
};

export default Events;
