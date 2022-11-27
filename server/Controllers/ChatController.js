import ChatModel from "../Models/ChatModel.js";

class ChatController {
    createChat = async (req, res) => {
        const newChat = new ChatModel({
            members: [req.body.senderId, req.body.receiverId]
        })

        try {
            const result = await newChat.save()
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        }
    };

    userChats = async (req, res) => {
        try {
            const chat = await ChatModel.findOne({
                members: { $all: [req.params.firstId, req.params.secondId] }
            })
            res.status(200).json(chat)
        } catch (error) {
            res.status(500).json(error)
        }
    };

    findChat = async (req, res) => {
        try {
            const chat = await ChatModel.findOne({
                members: { $all: [req.params.firstId, req.params.secondId] }
            })
            res.status(200).json(chat)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default ChatController;
