
class QuestionService{
    executeQuestionService(test){
        return fetch(`http://localhost:8084/Questions/get/${test}`);
        // return axios.get(`http://localhost:8084/Questions/get/${test}`); 
    }
}

export default new QuestionService()