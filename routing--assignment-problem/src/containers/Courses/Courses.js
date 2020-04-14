import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom';

import './Courses.css';
import Course from '../Course/Course';
class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }
    navigationHandler=(id,title)=>{
        this.props.history.push(this.props.match.url+'/'+id+'/'+title);
    }
    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return <article className="Course" key={course.id} onClick={()=>this.navigationHandler(course.id,course.title)}>{course.title}</article>;
                        } )
                    }
                </section>
                <Route path={this.props.match.url+'/:courseId'+'/:courseTitle'} component={Course}/>
            </div>
        );
    }
}

export default Courses;