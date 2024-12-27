// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'

export const topic2: Topic = {
  topic: 'Vận dụng',
  level: 'Trung bình',
  totalQuestions: 10,
  totalScore: 100,
  totalTime: 300, // seconds
  questions: [
    {
      question: "Trong lớp học, một nhóm bạn học bắt đầu cười nhạo một bạn học mới vì cách bạn ấy ăn mặc. Bạn thấy việc này không đúng nhưng không muốn bị cô lập, bạn sẽ làm gì?",
      choices: [
        "Lặng lẽ không nói gì và tiếp tục nghe bài giảng.",
        "Tham gia cùng nhóm bạn vì không muốn bị mọi người chú ý.",
        "Lên tiếng bảo vệ bạn học mới và yêu cầu mọi người tôn trọng nhau.",
        "Chuyển sang chỗ khác để không phải đối diện với tình huống này.",
      ],
      type: "MCQs",
      correctAnswers: ["Lên tiếng bảo vệ bạn học mới và yêu cầu mọi người tôn trọng nhau."],
      score: 10,
    },
    {
      question: "Giáo viên đưa ra một bài giảng mới và bạn thấy không đồng tình với phương pháp giảng dạy. Tuy nhiên, nhiều bạn trong lớp tỏ ra thích thú và đồng ý với cách giảng của thầy cô. Bạn sẽ làm gì?",
      choices: [
        "Im lặng vì không muốn gây xích mích với bạn bè.",
        "Lên tiếng phản đối thầy cô ngay lập tức, dù có thể không được tôn trọng.",
        "Lắng nghe thêm và thử hiểu lý do tại sao các bạn khác đồng ý.",
        "Gửi phản hồi cá nhân cho thầy cô sau giờ học, thay vì nói trước lớp.",
      ],
      type: "MCQs",
      correctAnswers: ["Lắng nghe thêm và thử hiểu lý do tại sao các bạn khác đồng ý."],
      score: 10,
    },
    {
      question: "Một video gây tranh cãi về một sự kiện nổi bật đang được chia sẻ rộng rãi trên mạng xã hội. Nhiều người tham gia bình luận chỉ trích hoặc ủng hộ video mà không kiểm tra tính xác thực. Bạn chưa biết rõ về sự kiện này, bạn sẽ làm gì?",
      choices: [
        "Chia sẻ video vì thấy nó đang được nhiều người quan tâm.",
        "Kiểm tra thông tin từ các nguồn đáng tin cậy trước khi chia sẻ.",
        "Bình luận theo xu hướng của đám đông để thể hiện quan điểm của mình.",
        "Chỉ theo dõi các bình luận mà không tham gia.",
      ],
      type: "MCQs",
      correctAnswers: ["Kiểm tra thông tin từ các nguồn đáng tin cậy trước khi chia sẻ."],
      score: 10,
    },
    {
      question: "Trên mạng xã hội, một người nổi tiếng đăng tải một bài viết với quan điểm mà bạn không đồng tình. Tuy nhiên, bài viết nhận được rất nhiều lượt thích và bình luận ủng hộ. Bạn sẽ làm gì?",
      choices: [
        "Bình luận phản bác ngay lập tức, dù có thể bị phản đối.",
        "Chia sẻ lại bài viết để bạn bè biết quan điểm của bạn.",
        "Lướt qua mà không tham gia vào cuộc tranh luận.",
        "Tìm thêm thông tin từ các nguồn khác để củng cố quan điểm của mình, rồi mới tham gia vào cuộc thảo luận.",
      ],
      type: "MCQs",
      correctAnswers: ["Tìm thêm thông tin từ các nguồn khác để củng cố quan điểm của mình, rồi mới tham gia vào cuộc thảo luận."],
      score: 10,
    },
    {
      question: "Trong một bữa tiệc đông người, bạn thấy một nhóm người bắt đầu chỉ trích và nói xấu một người bạn khác. Bạn sẽ làm gì?",
      choices: [
        "Im lặng vì không muốn bị mọi người chú ý.",
        "Tham gia vào cuộc trò chuyện để hòa nhập với nhóm.",
        "Lên tiếng bảo vệ người bị chỉ trích, dù có thể sẽ làm mất lòng một số người.",
        "Tìm cách rời khỏi bữa tiệc để tránh tình huống này.",
      ],
      type: "MCQs",
      correctAnswers: ["Lên tiếng bảo vệ người bị chỉ trích, dù có thể sẽ làm mất lòng một số người."],
      score: 10,
    },
    {
      question: "Bạn đang tham gia một hoạt động nhóm và một số người trong nhóm bắt đầu làm việc không hiệu quả hoặc không tuân thủ các quy định. Bạn cảm thấy việc này ảnh hưởng đến chất lượng công việc, nhưng lại thấy rằng tất cả mọi người trong nhóm đều đang làm như vậy. Bạn sẽ làm gì?",
      choices: [
        "Cứ làm theo vì không muốn bị tách biệt khỏi nhóm.",
        "Nói với nhóm về việc cần tuân thủ quy định và phân công lại công việc.",
        "Tìm một nhóm khác để tham gia, bỏ qua nhóm này.",
        "Giữ im lặng và làm việc riêng.",
      ],
      type: "MCQs",
      correctAnswers: ["Nói với nhóm về việc cần tuân thủ quy định và phân công lại công việc."],
      score: 10,
    },
    {
      question: "Trong một cuộc họp lớp, bạn có một ý tưởng mới để giải quyết một vấn đề chung, nhưng khi bạn đưa ra ý tưởng, mọi người đều phản đối và cho rằng ý tưởng đó không khả thi. Bạn sẽ làm gì?",
      choices: [
        "Im lặng và không đưa ra thêm ý tưởng nữa.",
        "Cố gắng thay đổi ý tưởng của mình sao cho phù hợp với những gì mọi người muốn.",
        "Kiên quyết bảo vệ ý tưởng của mình, dù cho có bị phản đối.",
        "Tìm cách hiểu quan điểm của mọi người trước khi đưa ra ý tưởng khác.",
      ],
      type: "MCQs",
      correctAnswers: ["Tìm cách hiểu quan điểm của mọi người trước khi đưa ra ý tưởng khác."],
      score: 10,
    },
    {
      question: "Bạn tham gia một nhóm bạn và nhận thấy rằng mọi người đang quyết định làm một việc mà bạn cảm thấy không đúng hoặc có thể gây hại cho người khác (ví dụ: gian lận trong một cuộc thi, trêu chọc bạn bè). Bạn không muốn làm mất lòng nhóm nhưng cũng không muốn làm điều sai trái. Bạn sẽ làm gì?",
      choices: [
        "Làm theo nhóm vì không muốn bị tẩy chay.",
        "Tìm cách nói khéo để mọi người dừng lại mà không làm mất lòng ai.",
        "Lên tiếng bày tỏ quan điểm của mình và khuyên nhóm không nên làm vậy.",
        "Lặng lẽ bỏ đi và không tham gia.",
      ],
      type: "MCQs",
      correctAnswers: ["Lên tiếng bày tỏ quan điểm của mình và khuyên nhóm không nên làm vậy."],
      score: 10,
    },
    {
      question: "Trong một cuộc trò chuyện nhóm, bạn cảm thấy rằng mọi người đang đưa ra những ý tưởng thiếu hợp lý, nhưng vì sợ làm mất lòng mọi người, bạn không lên tiếng. Cuối cùng, nhóm quyết định thực hiện một trong những ý tưởng đó. Bạn có thể làm gì sau đó?",
      choices: [
        "Lặng lẽ chấp nhận kết quả dù bạn không đồng tình.",
        "Tham gia và hỗ trợ nhóm, mặc dù bạn không tin rằng đó là cách tốt nhất.",
        "Sau cuộc trò chuyện, bạn sẽ giải thích quan điểm của mình cho nhóm và đề xuất cải thiện.",
        "Tìm cách rời khỏi nhóm và không tham gia vào bất kỳ quyết định nào nữa.",
      ],
      type: "MCQs",
      correctAnswers: ["Sau cuộc trò chuyện, bạn sẽ giải thích quan điểm của mình cho nhóm và đề xuất cải thiện."],
      score: 10,
    },
    {
      question: "Khi bạn bè của bạn bắt đầu tham gia vào một thử thách hoặc xu hướng không lành mạnh (ví dụ: thử thách nguy hiểm, chia sẻ thông tin sai lệch), bạn cảm thấy lo lắng. Bạn sẽ làm gì?",
      choices: [
        "Tham gia thử thách vì không muốn tách biệt khỏi nhóm bạn.",
        "Chia sẻ sự lo lắng của mình với nhóm bạn và khuyên họ suy nghĩ kỹ trước khi làm.",
        "Lặng lẽ im lặng và không tham gia, mặc dù bạn cảm thấy không thoải mái.",
        "Cố gắng tìm cách thay đổi ý tưởng của nhóm bằng cách nói chuyện với từng người trong nhóm riêng lẻ.",
      ],
      type: "MCQs",
      correctAnswers: ["Chia sẻ sự lo lắng của mình với nhóm bạn và khuyên họ suy nghĩ kỹ trước khi làm."],
      score: 10,
    },
  ]
}
