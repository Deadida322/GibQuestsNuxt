export const state = () => {
    return {
        quests: [
            {
                id: 'dnrWIK0TGH',
                title: 'Квест для Кати',
                description: 'Этот квест целиком и полностью посвящён прекрасно Петровне, имеет развлекательно поздравлятельный характер, просьба, если вы не Екатерина, пройдите мимо и сделайте вид, что никакого квеста вы не видели',
                image: 'https://thypix.com/wp-content/uploads/2018/05/Sommerlandschaft-Bilder-55.jpg',
                stages: [
                    {
                        type: 'Видео',
                        name: 'Ты хочешь поиграть?',
                        url: 'https://www.youtube.com/watch?v=ypZqYoaHaHs'
                    },
                    {
                        type: 'Текст',
                        name: 'Расскажу второй этап',
                        text: 'https://www.youtube.com/watch?v=ypZqYoaHaHs'
                    },
                    {
                        type: 'Карта',
                        name: 'Найди статую ленина',
                        x: '23,2323235050',
                        y: '12,2123123123'
                    },
                    {
                        type: 'QR',
                        name: 'Отсканируй код под домом',
                        to: `asdasd`
                    },
                ],
                users: [
                    {
                        username: '1davidios1'
                    },
                    {
                        username: 'deaddia'
                    }
                ]
            },
            {
                id: 'dnrWIK0asaTGH',
                title: 'Квест для Кати',
                description: 'Этот квест целиком и полностью посвящён прекрасно Петровне, имеет развлекательно поздравлятельный характер, просьба, если вы не Екатерина, пройдите мимо и сделайте вид, что никакого квеста вы не видели',
                image: 'https://thypix.com/wp-content/uploads/2018/05/Sommerlandschaft-Bilder-55.jpg',
                stages: [
                    {
                        type: 'Видео',
                        name: 'Ты хочешь поиграть?',
                        url: 'https://www.youtube.com/watch?v=-kicGBIh5dw'
                    },
                    {
                        type: 'Текст',
                        name: 'Расскажу второй этап',
                        text: 'sadasdasdasd <b>asdasdad</b> /watch?v=ypZqYoaHaHs'
                    },
                    {
                        type: 'Карта',
                        name: 'Найди статую ленина',
                        x: '23,2323235050',
                        y: '12,2123123123'
                    },
                    {
                        type: 'QR',
                        name: 'Отсканируй код под домом',
                        to: `asdasd`
                    },
                ],
                users: [
                    {
                        username: '1davidios1'
                    },
                    {
                        username: 'deaddia'
                    }
                ]
            }
        ]
    }
}

export const getters = {
    getCurrent(state){
        return state.quests[0]
    }
}