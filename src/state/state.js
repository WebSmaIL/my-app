let state = {
    profile : {
        postsData : [
            {
                id: "1",
                message:
                    "Hi, its my first post in this social network, my name is Ilya and i`m learning React!",
                avatarURL:
                    "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-48.jpg",
                likeCount: "35",
            },
            {
                id: "2",
                message: "How are you bro?",
                avatarURL:
                    "https://uprostim.com/wp-content/uploads/2021/03/image204-9.jpg",
                likeCount: "21",
            },
            {
                id: "3",
                message: "im good, tnx!",
                avatarURL:
                    "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-48.jpg",
                likeCount: "25",
            },
            {
                id: "4",
                message: "Wow, this social network is a crazy",
                avatarURL:
                    "https://uprostim.com/wp-content/uploads/2021/03/image204-9.jpg",
                likeCount: "101",
            },
        ],
    },
    dialogs : {
        messagesData : [
            { id: 1, message: "Hi, bro, how are you?" },
            { id: 2, message: "i`m good, thanks!" },
        ],
        dialogsData : [
            { id: "1", userName: "Василий" },
            { id: "2", userName: "Вероника" },
            { id: "3", userName: "Витя" },
            { id: "4", userName: "Даня" },
            { id: "5", userName: "Максим" },
        ],
    },
}

export default state;