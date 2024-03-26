import request , {gql} from 'graphql-request'


const MasterUrl="https://api-ap-south-1.hygraph.com/v2/"+process.env.NEXT_PUBLIC_HYGRAPH_KEY+"/master"



export const getCourseList = async()=>{
    const query = gql`
    query CoursesLists {
      coursesLists {
        name
        banner {
          url
        }
        free
        id
        totalChapters
        tags
        auther
      }
    }
    
    `

    const result = await request(MasterUrl, query);
    return result;
}


export const getCourseById = async(id , userEmail)=>{
  const query = gql`
  query CoursesLists {
    coursesList(where: {id: "`+id+`"}) {
      chapters {
        ... on Chapters {
          id
          name
          video {
            url
          }
        }
      }
      free
      descriptions
      tags
      totalChapters
      youtubeUrl
      id
      name
      auther
    }

    userEnrolls(where: {courseId: "`+id+`", 
    userEmail: "`+userEmail+`"}) {
    courseId
    userEmail
    completedChapters
  }
  }
  
  `
  const result = await request(MasterUrl, query);
    return result;
}

export const EnrollCourse= async(courseId , userEmail)=>{
  const mutationQuery = gql`
  mutation EnrollCourse {
    createUserEnroll(data: {courseId: "`+courseId+`", userEmail: "`+userEmail+`"}) {
      id
    }
  }
  
  `

  const result = await request(MasterUrl, mutationQuery);
    return result;
}

export const PublishCourse = async(id)=>{
  const mutationQuery = gql`
  mutation EnrollCourse {
    publishUserEnroll(where: {id: "`+id+`"} ){
      id 
    }
  }
  
  
  `
  const result = await request(MasterUrl, mutationQuery);
    return result;


}
