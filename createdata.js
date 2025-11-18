require("dotenv").config();
const mongoose = require("mongoose");

// chỉnh lại path nếu models của bạn ở nơi khác
const User = require("./models/user.model.js");
const Post = require("./models/post.model.js");
const Comment = require("./models/comment.model.js");

async function connectDB() {
  const uri =
    process.env.MONGODB_URI ||
    "mongodb+srv://anhngoctrinh2604_db_user:admin1234@backendapi.cjkngdr.mongodb.net/KANILA_DATABASE?appName=BackEndAPI";

  await mongoose.connect(uri);
  console.log("✅ Connected to MongoDB (Batch U4)");
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

async function seedCommunity() {
  await connectDB();

  // Lấy một ít user làm “khách hàng thật”
  const users = await User.find().sort({ created_at: 1 }).limit(15);
  if (users.length < 5) {
    console.error("❌ Cần ít nhất 5 user để seed Community (Post + Comment).");
    process.exit(1);
  }

  console.log(`👥 Found ${users.length} users for community seeding`);

  // ---------- 1. Tạo POST ----------
  const postSeeds = [
    {
      userId: users[0]._id,
      title: "Review nhanh Kem nền che khuyết điểm cho da dầu",
      imageUrl: "https://www.sephora.com/productimages/sku/s2890325-main-zoom.jpg?imwidth=375",
      content:
        "Hôm nay mình thử combo kem nền kiềm dầu + che khuyết điểm cho da dầu mụn. Cảm nhận là độ che phủ khá tốt, lên da mỏng nhẹ, không bị cakey nhiều. Bạn nào da dầu nên set lại với phấn phủ dạng bột sẽ đẹp hơn."
    },
    {
      userId: users[1]._id,
      title: "Makeup đi làm mỗi ngày: 5 phút là xong",
      imageUrl: "https://www.sephora.com/productimages/sku/s2890325-av-8202507100902038700700-zoom.jpg?imwidth=375",
      content:
        "Mình chia sẻ routine makeup đi làm siêu nhanh: kem chống nắng có màu, chút kem che khuyết điểm, má hồng kem, chuốt mascara và son tint. Tổng cộng tầm 5 phút mà mặt vẫn tươi, không quá dày."
    },
    {
      userId: users[2]._id,
      title: "Son MLBB cho tông da trung bình – không kén da",
      imageUrl: "https://www.sephora.com/productimages/sku/s2890325-av-2202507100902027270700-zoom.jpg?imwidth=612",
      content:
        "Tông da mình thuộc tông trung bình hơi ngăm, nên tìm son MLBB khá vất. Dạo này mê mấy màu hồng đất, cam đất pha nâu, lên môi tự nhiên mà vẫn tôn da. Bạn nào cùng tông da có thể tham khảo list màu mình gợi ý."
    },
    {
      userId: users[3]._id,
      title: "Da khô nên chọn phấn phủ như thế nào?",
      imageUrl: "https://www.sephora.com/productimages/sku/s2890325-av-5202507100902029660700-zoom.jpg?imwidth=612",
      content:
        "Da khô rất dễ bị mốc nếu dùng phấn phủ kiềm dầu quá mạnh. Mình thấy hợp nhất là phấn dạng bột mịn, có chút ánh glow nhẹ, chỉ phủ ở vùng chữ T và dưới mắt. Cả ngày da vẫn mềm, không bị lộ vảy."
    },
    {
      userId: users[4]._id,
      title: "Tips kẻ eyeliner cho mắt mí lót không bị lem",
      imageUrl: "https://www.sephora.com/productimages/sku/s2890325-av-5202507100902029660700-zoom.jpg?imwidth=612",
      content:
        "Mình mí lót nên kẻ eyeliner rất hay in lên bọng mắt. Cách mình làm là: dùng chì kẻ mảnh sát chân mi, sau đó khóa lại bằng phấn mắt cùng tông, cuối cùng xịt khoá makeup. Từ khi làm vậy gần như không còn bị lem."
    },
    {
      userId: users[5 % users.length]._id,
      title: "Routine trang điểm nhẹ nhàng cho da mụn nhạy cảm",
      imageUrl: "https://www.sephora.com/productimages/sku/s2849768-main-zoom.jpg?imwidth=612",
      content:
        "Da mình đang trong giai đoạn phục hồi nên hạn chế makeup nặng. Thường mình chỉ dùng kem chống nắng vật lý, kem che khuyết điểm chấm từng nốt mụn, má hồng lỏng và son tint. Tẩy trang thật kỹ là điều quan trọng nhất."
    }
  ];

  const createdPosts = await Post.insertMany(postSeeds);
  console.log(`📝 Created ${createdPosts.length} posts`);

  // ---------- 2. Tạo COMMENT (top-level) ----------
  const topLevelComments = [];

  createdPosts.forEach((post) => {
    // Mỗi bài 2–3 bình luận
    const commentCount = 2 + Math.floor(Math.random() * 2); // 2 hoặc 3

    const sampleComments = [
      "Mình cũng đang dùng sản phẩm này, thấy hợp da dầu lắm luôn!",
      "Cảm ơn bạn chia sẻ routine, mai mình thử áp dụng xem sao.",
      "Có thể gợi ý thêm vài tông màu phù hợp da ngăm không bạn?",
      "Nhìn hình là thấy lớp nền mịn rồi đó, bạn dùng kem lót gì vậy?",
      "Bài review chi tiết quá, đọc xong chỉ muốn cho vào giỏ ngay 😆",
      "Mình cũng bị mí lót, tip kẻ mắt này cứu mình mấy buổi đi làm trễ."
    ];

    for (let i = 0; i < commentCount; i++) {
      topLevelComments.push({
        postId: post._id,
        userId: pickRandom(users)._id,
        content: pickRandom(sampleComments)
      });
    }
  });

  const createdTopLevelComments = await Comment.insertMany(topLevelComments);
  console.log(`💬 Created ${createdTopLevelComments.length} top-level comments`);

  // ---------- 3. Tạo COMMENT reply (có parentCommentId) ----------
  const replySeeds = [];
  const replySamples = [
    "Chuẩn luôn, mình thử rồi và cảm nhận giống bạn.",
    "Để cuối tuần mình test rồi quay lại update cho mọi người.",
    "Cảm ơn bạn, mình đã thêm vào wishlist rồi nè.",
    "Tip hay quá, trước giờ mình toàn bị lem nên rất ngại kẻ mắt.",
    "Đồng quan điểm, da khô mà phủ phấn mạnh là toang liền."
  ];

  // Tạo reply cho khoảng 1/3–1/2 số bình luận đầu
  createdTopLevelComments
    .slice(0, Math.ceil(createdTopLevelComments.length / 2))
    .forEach((c) => {
      replySeeds.push({
        postId: c.postId,
        userId: pickRandom(users)._id,
        parentCommentId: c._id,
        content: pickRandom(replySamples)
      });
    });

  if (replySeeds.length > 0) {
    const createdReplies = await Comment.insertMany(replySeeds);
    console.log(`↩️ Created ${createdReplies.length} reply comments`);
  }

  console.log("✅ Batch U4 seeding done (Community: Post + Comment)");
  await mongoose.disconnect();
  process.exit(0);
}

seedCommunity().catch((err) => {
  console.error("❌ Error in Batch U4 seeding:", err);
  mongoose.disconnect();
  process.exit(1);
});
