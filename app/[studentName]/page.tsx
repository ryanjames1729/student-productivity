
import { GraphQLClient } from "graphql-request"


export async function generateStaticParams() {
    // fetch student names from the graphql endpoint, HYGRAPH_API

    //const HYGRAPH_ENDPOINT = 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clut101wd0wms07wbblx26huy/master'
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

export default function studentPage({ params }: { params: { studentName: string }}) {
    return (
        <div>
            STUDENT VIEW
            {params.studentName}
        </div>
    )
}