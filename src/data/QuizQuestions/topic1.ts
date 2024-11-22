// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'

export const topic1: Topic = {
  topic: 'Bộ câu hỏi số 1',
  level: 'Trung bình',
  totalQuestions: 25,
  totalScore: 250,
  totalTime: 600,
  questions: [
    {
      question: "Hiệu ứng tâm lý đám đông thường xảy ra khi nào?",
      choices: [
        "Khi có nhiều người cùng hành động",
        "Khi cá nhân hành động độc lập",
        "Khi không có ai theo dõi",
        "Khi mọi người hành động ngược lại với nhau",
      ],
      type: "MCQs",
      correctAnswers: ["Khi có nhiều người cùng hành động"],
      score: 10,
    },
    {
      question: "Khi mọi người trong lớp cùng đưa ra quyết định về việc làm bài tập nhóm, điều gì có thể xảy ra?",
      choices: [
        "Mọi người đều làm việc hiệu quả, vì tất cả đều đồng ý.",
        "Một số người có thể không tham gia, nhưng vẫn đồng ý vì không muốn tách biệt.",
        "Tất cả các thành viên đều làm việc một cách sáng tạo và độc lập.",
        "Không có tác động gì đến kết quả chung.",
      ],
      type: "MCQs",
      correctAnswers: [
        "Một số người có thể không tham gia, nhưng vẫn đồng ý vì không muốn tách biệt.",
      ],
      score: 10,
    },
    {
      question: "Khi nào con người dễ bị ảnh hưởng bởi đám đông nhất?",
      choices: [
        "Khi họ tự tin vào quyết định của mình",
        "Khi họ cảm thấy bất an hoặc không chắc chắn",
        "Khi họ đang ở một mình",
        "Khi họ không có cảm xúc",
      ],
      type: "MCQs",
      correctAnswers: ["Khi họ cảm thấy bất an hoặc không chắc chắn"],
      score: 10,
    },
    {
      question: "Để tránh bị ảnh hưởng tiêu cực bởi hiệu ứng đám đông, bạn nên làm gì?",
      choices: [
        "Luôn im lặng và không bao giờ tranh luận với nhóm.",
        "Đưa ra quyết định một cách độc lập và có lý trí.",
        "Tham gia vào mọi quyết định của nhóm để không bị cô lập.",
        "Đồng ý với tất cả các quyết định của nhóm dù không hiểu rõ.",
      ],
      type: "MCQs",
      correctAnswers: ["Đưa ra quyết định một cách độc lập và có lý trí."],
      score: 10,
    },
    {
      question: "Hiệu ứng tâm lý đám đông thường xảy ra trong các tình huống nào?",
      choices: [
        "Cuộc thảo luận nhỏ",
        "Biểu tình lớn hoặc bạo loạn",
        "Sự kiện cá nhân",
        "Cuộc họp gia đình",
      ],
      type: "MCQs",
      correctAnswers: ["Biểu tình lớn hoặc bạo loạn"],
      score: 10,
    },
    {
      question: "Hành động theo đám đông có thể được lý giải như là một phản ứng gì?",
      choices: [
        "Phản ứng thông minh",
        "Phản ứng tự nhiên của con người",
        "Phản ứng bị ép buộc",
        "Phản ứng lý trí",
      ],
      type: "MCQs",
      correctAnswers: ["Phản ứng tự nhiên của con người"],
      score: 10,
    },
    {
      question: "Một trong những tác động tích cực của hiệu ứng đám đông là:",
      choices: [
        "Khuyến khích mọi người làm theo các hành vi sai trái.",
        "Cùng nhau chia sẻ thông tin và học hỏi lẫn nhau.",
        "Khả năng suy nghĩ độc lập của mỗi cá nhân được giảm bớt.",
        "Tạo ra sự phụ thuộc vào những người xung quanh.",
      ],
      type: "MCQs",
      correctAnswers: ["Cùng nhau chia sẻ thông tin và học hỏi lẫn nhau."],
      score: 10,
    },
    {
      question: "Hiệu ứng đám đông có thể dẫn đến việc một cá nhân:",
      choices: [
        "Ra quyết định sáng suốt và tự chủ.",
        "Làm theo nhóm mà không suy nghĩ kỹ, chỉ vì muốn được chấp nhận.",
        "Tạo ra những quyết định tốt cho bản thân và người khác.",
        "Dễ dàng phản bác các quan điểm sai trái.",
      ],
      type: "MCQs",
      correctAnswers: [
        "Làm theo nhóm mà không suy nghĩ kỹ, chỉ vì muốn được chấp nhận.",
      ],
      score: 10,
    },
    {
      question: "Tại sao con người thường có xu hướng theo đám đông?",
      choices: [
        "Để tăng cường sự tự lập",
        "Để cảm thấy an toàn hơn",
        "Để nổi bật trong đám đông",
        "Để phán đoán rõ ràng hơn",
      ],
      type: "MCQs",
      correctAnswers: ["Để cảm thấy an toàn hơn"],
      score: 10,
    },
    {
      question: "Một trong những tác động tiêu cực của hiệu ứng đám đông là:",
      choices: [
        "Hành vi của cá nhân sẽ trở nên mạnh mẽ và độc lập hơn.",
        "Mọi người đều làm việc chăm chỉ và hiệu quả.",
        "Các quyết định sai lầm có thể xảy ra do sự thiếu suy nghĩ độc lập.",
        "Mọi người đều dễ dàng chia sẻ ý tưởng sáng tạo.",
      ],
      type: "MCQs",
      correctAnswers: [
        "Các quyết định sai lầm có thể xảy ra do sự thiếu suy nghĩ độc lập.",
      ],
      score: 10,
    },
    {
      question:
        "Khi tham gia vào một cuộc thảo luận nhóm, một trong những cách hiệu quả để hạn chế tác động của hiệu ứng đám đông là:",
      choices: [
        "Không bao giờ lên tiếng nếu bạn không đồng ý với nhóm.",
        "Lắng nghe các quan điểm khác và bảo vệ quan điểm của mình nếu cần.",
        "Tham gia vào các hành động sai trái để được chấp nhận.",
        "Không quan tâm đến quan điểm của người khác và chỉ tập trung vào ý kiến của mình.",
      ],
      type: "MCQs",
      correctAnswers: [
        "Lắng nghe các quan điểm khác và bảo vệ quan điểm của mình nếu cần.",
      ],
      score: 10,
    },
    {
      question:
        "Khi cả lớp đồng lòng tham gia vào một hoạt động tình nguyện, đây là một ví dụ của:",
      choices: [
        "Tác động tiêu cực của hiệu ứng đám đông.",
        "Tác động tích cực của hiệu ứng đám đông.",
        "Sự tự do và độc lập của cá nhân.",
        "Không có tác động gì đến hành vi của học sinh.",
      ],
      type: "MCQs",
      correctAnswers: ["Tác động tích cực của hiệu ứng đám đông."],
      score: 10,
    },
    {
      question: "Khi nào hiệu ứng đám đông thường có xu hướng tiêu cực?",
      choices: [
        "Khi có bạo lực và hỗn loạn",
        "Khi mọi người hợp tác với nhau",
        "Khi đám đông nhỏ",
        "Khi không có áp lực xã hội",
      ],
      type: "MCQs",
      correctAnswers: ["Khi có bạo lực và hỗn loạn"],
      score: 10,
    },
    {
      question:
        "Hiệu ứng đám đông có thể giúp học sinh đạt được kết quả học tập tốt hơn khi:",
      choices: [
        "Các bạn học cùng nhau và hỗ trợ lẫn nhau trong việc ôn tập cho kỳ thi.",
        "Các bạn đồng loạt bỏ qua việc học và tập trung vào các hoạt động không liên quan.",
        "Tất cả đều làm việc theo sự chỉ đạo của một người có ảnh hưởng trong nhóm.",
        "Mọi người chỉ làm theo những gì người khác nói mà không suy nghĩ kỹ.",
      ],
      type: "MCQs",
      correctAnswers: [
        "Các bạn học cùng nhau và hỗ trợ lẫn nhau trong việc ôn tập cho kỳ thi.",
      ],
      score: 10,
    },
    {
      question: "Khi bạn tham gia vào một nhóm học tập vì thấy các bạn trong lớp đều tham gia, nhưng bạn không thật sự muốn tham gia, bạn có thể cảm thấy:",
      choices: [
        "Thoải mái vì đã làm theo mọi người.",
        "Rất vui vì được hỗ trợ trong việc học.",
        "Không thoải mái, cảm thấy bị áp lực làm theo nhóm.",
        "Không có cảm xúc gì đặc biệt.",
      ],
      type: "MCQs",
      correctAnswers: ["Không thoải mái, cảm thấy bị áp lực làm theo nhóm."],
      score: 10,
    },
    {
      question: "Hành vi nào thường thấy ở người bị ảnh hưởng bởi hiệu ứng đám đông?",
      choices: [
        "Phản kháng mạnh mẽ",
        "Tuân theo mà không suy nghĩ",
        "Phê phán quyết định của nhóm",
        "Giữ vững lập trường cá nhân",
      ],
      type: "MCQs",
      correctAnswers: ["Tuân theo mà không suy nghĩ"],
      score: 10,
    },
    {
      question: "Hiệu ứng đám đông có thể giúp tăng cường điều gì trong xã hội?",
      choices: [
        "Tính sáng tạo",
        "Sự đoàn kết xã hội",
        "Tính cá nhân",
        "Khả năng phản biện",
      ],
      type: "MCQs",
      correctAnswers: ["Sự đoàn kết xã hội"],
      score: 10,
    },
    {
      question: "Một bạn trong lớp nhờ bạn làm bài tập hộ, bạn đó là 'đại ca' của lớp, dù không thích nhưng vì thấy mọi người ai cũng làm theo bạn ấy, thì bạn sẽ làm gì?",
      choices: [
        "Báo với thầy cô",
        "Từ chối vì đây là hành động không đúng",
        "Nói với bạn đây là điều không nên, bạn nên tự làm để cải thiện học tập",
        "Làm theo lời bạn ấy nói",
      ],
      type: "MCQs",
      correctAnswers: [
        "Nói với bạn đây là điều không nên, bạn nên tự làm để cải thiện học tập",
      ],
      score: 10,
    },
    {
      question: "Yếu tố nào làm tăng khả năng một người bị ảnh hưởng bởi hiệu ứng đám đông?",
      choices: [
        "Họ có ý kiến khác với đám đông",
        "Họ không chắc chắn về tình huống",
        "Họ tự tin vào quyết định của mình",
        "Họ đã có kế hoạch từ trước",
      ],
      type: "MCQs",
      correctAnswers: ["Họ không chắc chắn về tình huống"],
      score: 10,
    },
    {
      question: "Sự lan truyền cảm xúc trong đám đông có thể dẫn đến hiện tượng gì?",
      choices: [
        "Mọi người trở nên bình tĩnh hơn",
        "Cảm xúc tiêu cực hoặc tích cực lan tỏa nhanh chóng",
        "Đám đông trở nên thụ động",
        "Không có thay đổi cảm xúc",
      ],
      type: "MCQs",
      correctAnswers: ["Cảm xúc tiêu cực hoặc tích cực lan tỏa nhanh chóng"],
      score: 10,
    },
    {
      question: "Một trong những cách để phòng tránh những tác động của hiệu ứng đám đông mang xu hướng tiêu cực là gì?",
      choices: [
        "Tăng cường sự hiểu biết cá nhân",
        "Tham gia vào các đám đông lớn hơn",
        "Tránh xa các nhóm nhỏ",
        "Hành động theo cảm tính",
      ],
      type: "MCQs",
      correctAnswers: ["Tăng cường sự hiểu biết cá nhân"],
      score: 10,
    },
    {
      question: "Khi hiệu ứng đám đông trở nên mạnh mẽ, cá nhân có thể cảm thấy điều gì?",
      choices: [
        "Bị áp lực tuân theo số đông",
        "Dễ dàng đưa ra quyết định độc lập",
        "Không bị ảnh hưởng bởi người khác",
        "Phản kháng mạnh mẽ với đám đông",
      ],
      type: "MCQs",
      correctAnswers: ["Bị áp lực tuân theo số đông"],
      score: 10,
    },
    {
      question: "Hiệu ứng đám đông có thể gây tác động đến quá trình ra quyết định khi nào?",
      choices: [
        "Khi quyết định dựa trên dữ liệu cụ thể",
        "Khi cá nhân không có đủ thông tin và chọn làm theo số đông",
        "Khi cá nhân tự tin vào quyết định của mình",
        "Khi các quyết định được lên kế hoạch từ trước",
      ],
      type: "MCQs",
      correctAnswers: [
        "Khi cá nhân không có đủ thông tin và chọn làm theo số đông",
      ],
      score: 10,
    },
    {
      question: "Một ví dụ về hiệu ứng đám đông trong đời sống học đường là gì?",
      choices: [
        "Học sinh làm bài tập độc lập",
        "Học sinh bắt chước hành vi của nhau trong lớp học",
        "Học sinh thảo luận nhóm với suy nghĩ riêng biệt",
        "Học sinh không tham gia vào các hoạt động chung",
      ],
      type: "MCQs",
      correctAnswers: ["Học sinh bắt chước hành vi của nhau trong lớp học"],
      score: 10,
    },
    {
      question: "Đâu là một biểu hiện tích cực của hiệu ứng đám đông?",
      choices: [
        "Mọi người cùng hợp tác để đạt được mục tiêu chung",
        "Sự bạo lực và hỗn loạn",
        "Hành vi thiếu kiểm soát của cá nhân",
        "Quyết định thiếu lý trí",
      ],
      type: "MCQs",
      correctAnswers: ["Mọi người cùng hợp tác để đạt được mục tiêu chung"],
      score: 10,
    },
  ],
}
