export default class ResumeService{

    async addResume(resumeModel){

        return await axios({
            method:"POST",
            url: `http://localhost:8080/api/resume/add-resume`,
            data: resumeModel,
            headers: {"Content-Type": "application/json;charset-UTF-8"}
        }).then((res)=> {
            return res.data.message
        }).catch((err)=> {
            return err.error.error
        });
       }
}