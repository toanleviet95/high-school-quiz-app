// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'

export const topic5: Topic = {
  topic: 'Vận dụng cao',
  level: 'Nâng cao',
  totalQuestions: 10,
  totalScore: 100,
  totalTime: 300, // seconds
  questions: [
    {
      question: "Khi một đám đông bắt đầu hoảng loạn, bạn nên áp dụng chiến lược nào để bình tĩnh lại tình hình?",
      choices: [
        "Kích thích thêm sự hoảng loạn",
        "Khuyến khích mọi người giữ bình tĩnh và hướng dẫn họ",
        "Bỏ chạy",
        "Không làm gì cả",
      ],
      type: "MCQs",
      correctAnswers: ["Khuyến khích mọi người giữ bình tĩnh và hướng dẫn họ"],
      score: 10,
    },
    {
      question: "Khi thấy một người trong nhóm có ý kiến khác biệt, bạn nên làm gì để khuyến khích thảo luận?",
      choices: [
        "Bỏ qua ý kiến của họ",
        "Lắng nghe và thảo luận một cách cởi mở",
        "Chỉ nghe ý kiến của người khác",
        "Gây áp lực cho họ",
      ],
      type: "MCQs",
      correctAnswers: ["Lắng nghe và thảo luận một cách cởi mở"],
      score: 10,
    },
    {
      question: "Khi tổ chức một hoạt động hay sự kiện nào đó, điều nào sau đây là quan trọng nhất để đảm bảo an toàn cho mọi người?",
      choices: [
        "Không có kế hoạch",
        "Thông báo rõ ràng về các quy tắc và hướng dẫn",
        "Tăng cường sự hoảng loạn",
        "Không thông báo cho ai",
      ],
      type: "MCQs",
      correctAnswers: ["Thông báo rõ ràng về các quy tắc và hướng dẫn"],
      score: 10,
    },
    {
      question: "Khi bạn thấy một nhóm người đang có hành vi bạo lực, điều gì là cách tốt nhất để can thiệp?",
      choices: [
        "Tham gia vào hành vi đó",
        "Gọi cảnh sát hoặc người có thẩm quyền",
        "Bỏ đi",
        "Khuyến khích họ tiếp tục",
      ],
      type: "MCQs",
      correctAnswers: ["Gọi cảnh sát hoặc người có thẩm quyền"],
      score: 10,
    },
    {
      question: "Khi tổ chức một sự kiện lớn, điều nào sau đây là quan trọng nhất để đảm bảo mọi người tham gia tích cực?",
      choices: [
        "Không có kế hoạch",
        "Tạo ra sự phân chia giữa các nhóm",
        "Khuyến khích mọi người tham gia và chia sẻ ý kiến",
        "Tạo ra sự hoảng loạn",
      ],
      type: "MCQs",
      correctAnswers: ["Khuyến khích mọi người tham gia và chia sẻ ý kiến"],
      score: 10,
    },
    {
      question: "Khi bạn nhận thấy rằng một nhóm đang bị ảnh hưởng bởi hiệu ứng tâm lý đám đông, bạn nên làm gì?",
      choices: [
        "Tham gia vào hành vi đó",
        "Đưa ra thông tin và khuyến khích suy nghĩ độc lập",
        "Không làm gì cả",
        "Tạo ra sự hoảng loạn",
      ],
      type: "MCQs",
      correctAnswers: ["Đưa ra thông tin và khuyến khích suy nghĩ độc lập"],
      score: 10,
    },
    {
      question: "Bạn đang tham gia một sự kiện lớn và thấy một nhóm người bắt đầu hoảng loạn vì một tiếng động lớn. Bạn sẽ:",
      choices: [
        "Tham gia vào sự hoảng loạn",
        "Cố gắng giữ bình tĩnh và hướng dẫn mọi người ra khỏi khu vực đó",
        "Bỏ chạy ngay lập tức",
        "Đứng im và quan sát",
      ],
      type: "MCQs",
      correctAnswers: ["Cố gắng giữ bình tĩnh và hướng dẫn mọi người ra khỏi khu vực đó"],
      score: 10,
    },
    {
      question: "Trong một cuộc họp nhóm, một thành viên đưa ra một ý kiến khác biệt. Các thành viên khác đều im lặng. Bạn nên:",
      choices: [
        "Đồng ý với ý kiến của nhóm",
        "Khuyến khích thành viên đó nói thêm về ý kiến của mình",
        "Bỏ qua và chuyển sang chủ đề khác",
        "Gây áp lực để mọi người đồng ý",
      ],
      type: "MCQs",
      correctAnswers: ["Khuyến khích thành viên đó nói thêm về ý kiến của mình"],
      score: 10,
    },
    {
      question: "Bạn thấy một số người bắt đầu hành động bạo lực. Bạn sẽ:",
      choices: [
        "Tham gia vào hành động bạo lực",
        "Cố gắng ngăn cản hành động bạo lực và khuyên mọi người giữ bình tĩnh",
        "Bỏ đi",
        "Chỉ đứng quan sát",
      ],
      type: "MCQs",
      correctAnswers: ["Cố gắng ngăn cản hành động bạo lực và khuyên mọi người giữ bình tĩnh"],
      score: 10,
    },
    {
      question: "Khi thấy một nhóm người đang xô đẩy nhau trong một sự kiện thể thao, bạn nên:",
      choices: [
        "Tham gia vào sự xô đẩy",
        "Cố gắng tạo ra một lối đi an toàn cho mọi người",
        "Không làm gì cả",
        "Kêu gọi người khác tham gia",
      ],
      type: "MCQs",
      correctAnswers: ["Cố gắng tạo ra một lối đi an toàn cho mọi người"],
      score: 10,
    },
  ]
}
