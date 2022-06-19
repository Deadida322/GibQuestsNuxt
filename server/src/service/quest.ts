import { Quest } from '../entity/Quest';
import { User } from "../entity/User";
import { NotFoundError } from "../error";
import { catchOrmErrors } from "./utils";
import { AppDataSource } from "../data-source"
import { Stage, StageEnumArray} from '../entity/Stage';
import { StageDto } from '../controllers/dto/StageDto';
import { StageActionMapDto, StageActionMediaDto, StageActionQrDto, StageActionTextDto } from '../controllers/dto/StageActionDto';
import { Stage_Test } from '../entity/Stage_Test';
import { Question } from '../entity/Question';
import { Answer } from '../entity/Answer';
import { RightAnswer } from '../entity/RightAnswer';
import { Stage_Action } from '../entity/Stage_Action';
import { QuestionDto } from '../controllers/dto/QuestionDto';

async function saveQuestion(q: QuestionDto, stageTest: Stage_Test) {
    const questRep = AppDataSource.getRepository(Quest);
    const stageRep = AppDataSource.getRepository(Stage);
    const userRep = AppDataSource.getRepository(User);
    const stageTestRep = AppDataSource.getRepository(Stage_Test);
    const stageActionRep = AppDataSource.getRepository(Stage_Action);
    const questionRep = AppDataSource.getRepository(Question);
    const answerRep = AppDataSource.getRepository(Answer);
    const rightAnswerRep = AppDataSource.getRepository(RightAnswer);

    let question = new Question()
    
    question.number = q.number
    question.contain = q.contain
    question.type = q.type
    question.stageTest = stageTest
    const saveQuest = await questionRep.save(question)
    q.answers.forEach(a => {
        let answer = new Answer()
        answer.question = question
        answer.value = a.value
        answerRep.save(answer)
    })
    q.rightAnswers.forEach(r => {
        let rightAnswer = new RightAnswer()
        rightAnswer.question = question
        rightAnswer.value = r.value
        rightAnswerRep.save(rightAnswer)
    })
}

export class QuestService {
    // private static getTypeAction(type) {
    //     //['Видео', 'Текст', 'Карта', 'Тест', 'QR']
    //     switch(type) {
    //         case (StageEnumArray[0]):
    //             return:     
    //         break;
    //     }
    // }
    public static async add(title: string, description: string, image: string, stages: StageDto[], username: string): Promise<Quest> {
        const questRep = AppDataSource.getRepository(Quest);
        const stageRep = AppDataSource.getRepository(Stage);
        const userRep = AppDataSource.getRepository(User);
        const stageTestRep = AppDataSource.getRepository(Stage_Test);
        const stageActionRep = AppDataSource.getRepository(Stage_Action);
        const questionRep = AppDataSource.getRepository(Question);
        const answerRep = AppDataSource.getRepository(Answer);
        const rightAnswerRep = AppDataSource.getRepository(RightAnswer);
        return catchOrmErrors(async () => {
            const quest = new Quest();
            quest.title = title;
            quest.description = description;
            quest.image = image;
            const author = await userRep.findOneBy({username}); 
            quest.author = author
            const resQuestSave = await questRep.save(quest)

            await stages.forEach(async function(s) {
                let stage = new Stage()
                stage.name = s.name
                stage.number = s.number
                stage.quest = quest
                stage.type = s.type
                await stageRep.save(stage)
                
                if(stage.type === "Тест") {
                    // console.log(s);
                    const stageTest = new Stage_Test()
                    stageTest.stage = stage
                    stageTest.title = s.test.title
                    await stageTestRep.save(stageTest)
                    await s.test.questions.forEach(q => saveQuestion(q, stageTest));

                    // s.test.questions.forEach(q => {
                    //     let question = new Question()
                        
                    //     question.number = q.number
                    //     question.contain = q.contain
                    //     question.type = q.type
                    //     question.stageTest = stageTest
                    //     questionRep.save(question)
                    //     q.answers.forEach(a => {
                    //         let answer = new Answer()
                    //         answer.question = question
                    //         answer.value = a.value
                    //         answerRep.save(answer)
                    //     })
                    //     q.rightAnswers.forEach(r => {
                    //         let rightAnswer = new RightAnswer()
                    //         rightAnswer.question = question
                    //         rightAnswer.value = r.value
                    //         rightAnswerRep.save(rightAnswer)
                    //     })
                    // })
                }
                else {
                    const stageAction = new Stage_Action()
                    if(stage.type === "QR") {
                        stageAction.to = (<StageActionQrDto>(s as unknown)).to
                    }
                    else if(stage.type === "Видео") {
                        stageAction.url = (<StageActionMediaDto>(s as unknown)).url
                    }
                    else if(stage.type === "Карта") {
                        stageAction.lat = (<StageActionMapDto>(s as unknown)).lat
                        stageAction.long = (<StageActionMapDto>(s as unknown)).long
                    }
                    else {
                        stageAction.text = (<StageActionTextDto>(s as unknown)).text
                    }
                    // console.log('stage',stage);
                    
                    stageAction.stage = stage
                    await stageActionRep.save(stageAction)
                    
                }

                
            })
            // console.log(stages[2].questions);
            
             return resQuestSave;
        });
        // return catchOrmErrors(async () => {
        //     const quest = new Quest();
        //     quest.title = title;
        //     quest.description = description;
        //     quest.image = image;
        //     const author = await userRep.findOneBy({username}); 
        //     quest.author = author
        //     const resQuestSave = await questRep.save(quest)
        //     let stagesSave: Stage[] = new Array()
        //     let stagesTestSave: Stage_Test[]= new Array()
        //     let questionSave: Question[]= new Array()
        //     let answerSave: Answer[]= new Array()
        //     let rightAnswerSave: RightAnswer[]= new Array()

        //     await stages.forEach(s => {
        //         let stage = new Stage()
        //         stage.name = s.name
        //         stage.number = s.number
        //         stage.quest = quest
        //         stage.type = s.type
        //         stagesSave.push(stage)
                
        //         if(stage.type === "Тест") {
        //             // console.log(s);
        //             const stageTest = new Stage_Test()
        //             stageTest.stage = stage
        //             stageTest.title = s.test.title
        //             stagesTestSave.push(stageTest)
        //             s.test.questions.forEach(q => {
        //                 let question = new Question()
                        
        //                 question.number = q.number
        //                 question.contain = q.contain
        //                 question.type = q.type
        //                 question.stageTest = stageTest
        //                 questionSave.push(question)
        //                 q.answers.forEach(a => {
        //                     let answer = new Answer()
        //                     answer.question = question
        //                     answer.value = a.value
        //                     answerSave.push(answer)
        //                 })
        //                 q.rightAnswers.forEach(r => {
        //                     let rightAnswer = new RightAnswer()
        //                     rightAnswer.question = question
        //                     rightAnswer.value = r.value
        //                     rightAnswerSave.push(rightAnswer)
        //                 })
        //             })
        //         }
        //         else {
        //             try {
                        
                    
        //                 const stageAction = new Stage_Action()
        //                 if(stage.type === "QR") {
        //                     stageAction.to = (<StageActionQrDto>(s as unknown)).to
        //                 }
        //                 else if(stage.type === "Видео") {
        //                     stageAction.url = (<StageActionMediaDto>(s as unknown)).url
        //                 }
        //                 else if(stage.type === "Карта") {
        //                     stageAction.lat = (<StageActionMapDto>(s as unknown)).lat
        //                     stageAction.long = (<StageActionMapDto>(s as unknown)).long
        //                 }
        //                 else {
        //                     stageAction.text = (<StageActionTextDto>(s as unknown)).text
        //                 }
        //                 stageActionRep.save(stageAction)
        //             }
        //             catch(e) {
        //                 console.log(e);
                        
        //             }
                    
        //         }

        //         rightAnswerSave.forEach(e => {
        //            rightAnswerRep.save(e)
        //         })

        //         answerSave.forEach(e => {
        //             answerRep.save(e)
        //         })
        //         questionSave.forEach(e => {
        //             questionRep.save(e)
        //         })
        //         stagesTestSave.forEach(e => {
        //             stageTestRep.save(e)
        //         })
        //         stagesSave.forEach(e => {
        //             stageRep.save(e)
        //         })
        //     })
        //     // console.log(stages[2].questions);
            
        //      return resQuestSave;
        // });
    }
   





    // public static async edit(id: string, data: { name?: string, born?: number, died?: number }): Promise<Author> {
    //     const rep = getManager().getRepository(Author);
    //     let author = await rep.findOne(id);
    //     if (!author) throw new NotFoundError('author');
    //     const { name, born, died } = data;
    //     author = {
    //         ...author,
    //         ...name && { name },
    //         ...born && { born },
    //         ...died && { died },
    //     }
    //     return await rep.save(author);
    // }

    // public static async get(username: string): Promise<User> {
    //     const rep = AppDataSource.getRepository(User);
    //     return await rep.findOneBy({ username })
    // }


    // public static async getPureSql(...ids: string[]): Promise<Author[]> {
    //     const rep = getManager().getRepository(Author);
    //     if (ids.length === 0)
    //         return await rep.query('select * from Author')
    //     return await rep.query('select * from Author where 1=0 or ' + ids.map(id => `"id"='${id}'`).join(' or '))
    // }
}