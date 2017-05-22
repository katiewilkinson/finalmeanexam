var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
	name        :String,
	created_at  :{ type: Date, default: Date.now },
	topics      :[{ type: mongoose.Schema.Types.Mixed, ref: "Topics" }],
	posts       :[{ type: mongoose.Schema.Types.Mixed, ref: "Posts" }],
	comments    :[{ type: mongoose.Schema.Types.Mixed, ref: "Comments"}]
})


var topicSchema = mongoose.Schema({
	name        :String, required:true, minlength:5,
	user_id     :{ type: mongoose.Schema.Types.ObjectId, ref: "Users" },
	category    :String,
	title       :String,
	description :String,
	created_at  :{ type: Date, default: Date.now },
	posts       :Number
})


mongoose.model("Users", userSchema);
mongoose.model("Topics", topicSchema);
