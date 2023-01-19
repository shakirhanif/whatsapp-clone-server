import Conversation from "../model/Conversation.js";
import Message from "../model/Message.js";

export const newMessage = async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    await newMessage.save();
    await Conversation.findByIdAndUpdate(req.body.conversationId, {
      message: req.body.text,
    });
    return res.status(200).json("message sent successfully");
  } catch (error) {
    res.status(500).json(error.message);
  }
};
