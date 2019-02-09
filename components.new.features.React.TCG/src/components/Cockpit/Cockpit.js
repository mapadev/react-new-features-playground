import React, { useEffect } from "react";

import classes from "./Cockpit.css";

const cockpit = props => {
    // useEffect(() => {
    //     console.log("[Cockpit.js] useEffect");

    //     setTimeout(() => {
    //         alert("simulate e.g. http request");
    //     }, 1000);
    // }); // runs every time

    // useEffect(() => {
    //     console.log("[Cockpit.js] useEffect");

    //     setTimeout(() => {
    //         alert("simulate e.g. http request");
    //     }, 1000);
    // }, [props.persons]); // runs only when props.persons change

    // useEffect(() => {
    //     console.log("[Cockpit.js] useEffect");

    //     setTimeout(() => {
    //         alert("simulate e.g. http request");
    //     }, 1000);
    // }, []); // runs only once, empty array means no dependencies, but prevents from running every time

    // useEffect(() => {
    //     console.log("[Cockpit.js] useEffect");

    //     setTimeout(() => {
    //         alert("simulate e.g. http request");
    //     }, 1000);

    //     return () => {
    //         console.log("[Cockpit.js] cleanup work in useEffect hook");
    //     };
    // }, []);

    useEffect(() => {
        console.log("[Cockpit.js] useEffect");

        const timer = setTimeout(() => {
            alert("simulate e.g. http request");
        }, 1000);

        return () => {
            clearTimeout(timer);
            console.log("[Cockpit.js] cleanup work in useEffect hook");
        };
    }, []);

    const assignedClasses = [];
    let btnClass = "";
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(" ")}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>
                Toggle Persons
            </button>
        </div>
    );
};

export default cockpit;
