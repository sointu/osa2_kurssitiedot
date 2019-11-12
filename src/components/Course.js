import React from 'react'

const Course = ({ courses }) => {

    const Tulostus = () =>
        courses.map(course =>
            
            <>
                <Header  
                    course={course}
                />

                <Content
                    key={Part.id}
                    course={course}
                />

                <Total
                  course={course}
                />
            </>
        )

    const Header = (props) => {
        return (
            <h2>{props.course.name}</h2>
        )
    }

    const Part = (props) => { 
        return (
            <p>
                {props.part} {props.exercises}
            </p>
        )
    }

    const Content = (props) => {
        let apu = props.course.parts
        return apu.map(a => (<>
            <Part key={a.id} part={a.name}
                exercises={a.exercises} />
        </>));
    }

    const Total = (props) => {
        const exercises = props.course.parts.map(
            (i) => {
                return i.exercises
            })
        let sum = exercises.reduce((a, b) => a + b)

        return (
            <strong>
                Total of {sum} exercises
            </strong>
        )
    }

    return (
        <Tulostus
            courses={courses}
        />
    )

}
export default Course