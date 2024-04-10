
import { GraphQLClient } from "graphql-request"


export async function generateStaticParams() {
    // fetch student names from the graphql endpoint, HYGRAPH_API

    const HYGRAPH_ENDPOINT = process.env.HYGRAPH_API
    const graphcms = new GraphQLClient(HYGRAPH_ENDPOINT || '')

    const { students }: { students: Array<{ userName: string}>} = await graphcms.request( 
        `
        query Assets {
            students {
              id
              userName
            }
          }
        `
    )
    return students.map((student) => ({
      studentName: student.userName.slice(0, student.userName.indexOf('@')),
    }))
}

async function getTasks( studentName: string) {
    const HYGRAPH_ENDPOINT = process.env.HYGRAPH_API
    const graphcms = new GraphQLClient(HYGRAPH_ENDPOINT || '')
    // still working on this query -> variables not working
    const studentSearch = studentName ? studentName : ""
    
    const { toDos }: { toDos: Array<{ id: string, dueDate: string, task: string, taskComplete: boolean, userName: string }>} = await graphcms.request( 
        `
        query Assets($studentSearch: String!) {
            toDos(where: {userName: $studentSearch}) {
              id
              dueDate
              task
              taskComplete
              userName
            }
          }
        `, { studentSearch }
    )
    
    return toDos?.map((task) => ({
        id: task.id,
        dueDate: task.dueDate,
        task: task.task,
        taskComplete: task.taskComplete,
        userName: task.userName
    }))
}

export default async function studentPage({ params }: { params: { studentName: string } }) {
    const tasks = await getTasks(params.studentName + "@carolinaday.org")

    return (
        <div className="flex flex-col">
            <h1>STUDENT VIEW</h1>
            <h3>Welcome {params.studentName}!</h3>

            {tasks?.map((task) => (
                <div key={task.id}>
                    <p>{task.task}</p>
                    <p>{task.dueDate}</p>
                    <p>{task.taskComplete}</p>
                </div>
            ))}

            {tasks.length > 0 ? '' : <p>Hmm, no tasks found. Are you sure you have an account?</p>}
        </div>
    )
}