# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.delete_all
Post.delete_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('posts')

demo_user = User.create!(username: "john_boy223", password: "123456")
user1 = User.create!(username: "JusticarKayle", password: "123456") #2
user2 = User.create!(username: "AnakinSkywalker", password: "123456") #3
user3 = User.create!(username: "BastilaShan", password: "123456") #4
user4 = User.create!(username: "ProwessIronwill", password: "123456") #5
user5 = User.create!(username: "ValkyrieJane", password: "123456") #6


post1 = Post.create!(caption:"They shall tremble at my perfection!", author_id: 2)

    post1.photo.attach(io: open("https://s3.amazonaws.com/margatsni-seeds/kayle1.jpg"), filename:"kayle1.jpg")

post2 = Post.create!(caption:"Grant me the strength to forge by flame, a world beyond worlds", author_id: 2)

    post1.photo.attach(io: open("https://s3.amazonaws.com/margatsni-seeds/kayle2.jpg"), filename:"kayle2.jpg")

post3 = Post.create!(caption:"Behold the righteous flame!", author_id: 2)

    post1.photo.attach(io: open("https://s3.amazonaws.com/margatsni-seeds/kayle3.jpg"), filename:"kayle3.jpg")

post4 = Post.create!(caption:"When I looked into my mothers eyes I saw a paradise for the just and the glorious, it is for that world I fight.", author_id: 2)

    post1.photo.attach(io: open("https://s3.amazonaws.com/margatsni-seeds/kayle4.jpg"), filename:"kayle4.jpg")

post5 = Post.create!(caption:"As evil grows, so shall I!", author_id: 2)

    post5.photo.attach(io: open("https://s3.amazonaws.com/margatsni-seeds/kayle5.jpg"), filename:"kayle5.jpg")

post6 = Post.create!(caption:'You don"t know the power of the dark side! I must obey my master.', author_id: 3)

    post6.photo.attach(io: open("https://s3.amazonaws.com/margatsni-seeds/darthvader6.jpg"), filename:"darthvader6.jpg")

post7 = Post.create!(caption:'I am altering the deal. Pray I don"t alter it any further.', author_id: 3)

    post7.photo.attach(io: open("https://s3.amazonaws.com/margatsni-seeds/darthvader7.jpg"), filename:"darthvader7.jpg")

post8 = Post.create!(caption:"Be careful not to choke on your aspirations.", author_id: 3)

    post8.photo.attach(io: open("https://s3.amazonaws.com/margatsni-seeds/darthvader8.jpg"), filename:"darthvader8.jpg")

post9 = Post.create!(caption:'Don"t be too proud of this technological terror you"ve constructed. The ability to destroy a planet is insignificant next to the power of the Force.', author_id: 3)

    post9.photo.attach(io: open("https://s3.amazonaws.com/margatsni-seeds/darthvader9.jpg"), filename:"darthvader9.jpg")

post10 = Post.create!(caption:"Confronting fear is the destiny of a Jedi.", author_id: 4)

    post10.photo.attach(io: open("https://s3.amazonaws.com/margatsni-seeds/darthvader10.jpg"), filename:"darthvader10.jpg")

post11 = Post.create!(caption:'Don"t center on your anxieties. Keep your concentration here and now, where it belongs. Always remember, your focus determines your reality.', author_id:4)

    post11.photo.attach(io: open("https://s3.amazonaws.com/margatsni-seeds/jedi11.jpg"), filename:"jedi11.jpg")

post12 = Post.create!(caption:"It takes strength to resist the dark side. Only the weak embrace it.", author_id: 4)

    post12.photo.attach(io: open("https://s3.amazonaws.com/margatsni-seeds/jedi12.jpg"), filename:"jedi12.jpg")

post13 = Post.create!(caption:"Wars not make one great.", author_id: 4)

    post13.photo.attach(io: open("https://s3.amazonaws.com/margatsni-seeds/jedi13.jpg"), filename:"jedi13.jpg")

post14 = Post.create!(caption:'Remember, concentrate on the moment. Feel, don"t think. Trust your instincts.', author_id: 4)

    post14.photo.attach(io: open("https://s3.amazonaws.com/margatsni-seeds/jedi14.jpg"), filename:"jedi14.jpg")

post15 = Post.create!(caption:'Always rise to an early meal, but eat your fill before a feast. If you"re hungry you have no time to talk at the table.', author_id: 5)

    post15.photo.attach(io: open("https://s3.amazonaws.com/margatsni-seeds/jedi15.jpg"), filename:"jedi15.jpg")

post16 = Post.create!(caption:'Moderately wise a man should be not too crafty or clever. A learned man"s heart whose learning is deep seldom sings with joy.', author_id: 5)

    post16.photo.attach(io: open("https://s3.amazonaws.com/margatsni-seeds/viking16.jpg"), filename:"viking16.jpg")

post17 = Post.create!(caption:"The unwise man is awake all night worries over and again. When morning rises he is restless still, his burden as before.", author_id: 5)

    post17.photo.attach(io: open("https://s3.amazonaws.com/margatsni-seeds/viking17.jpg"), filename:"viking17.jpg")

post18 = Post.create!(caption:"It is fortunate to be favored with praise and popularity. It is dire luck to be dependent on the feelings of your fellow man.", author_id: 5)

    post18.photo.attach(io: open("https://s3.amazonaws.com/margatsni-seeds/viking18.jpg"), filename:"viking18.jpg")

post19 = Post.create!(caption:'Go you must. No guest shall stay in one place for ever. Love will be lost if you sit too long at a friend"s fire.', author_id: 5)

    post19.photo.attach(io: open("https://s3.amazonaws.com/margatsni-seeds/viking19.jpg"), filename:"viking19.jpg")

post20 = Post.create!(caption:'Be your friend"s true friend. Return gift for gift. Repay laughter with laughter again but betrayal with treachery.', author_id: 5)

    post20.photo.attach(io: open("https://s3.amazonaws.com/margatsni-seeds/viking20.jpg"), filename:"viking20.jpg")

post21 = Post.create!(caption:"The Gods will always smile upon brave women.", author_id: 6)

    post21.photo.attach(io: open("https://s3.amazonaws.com/margatsni-seeds/vikings21.jpg"), filename:"vikings21.jpg")

post22 = Post.create!(caption:'I"m Old Enough To Know That You Can Never Say For Sure What Someone Else Will Do.', author_id: 6)

    post22.photo.attach(io: open("https://s3.amazonaws.com/margatsni-seeds/vikings22.jpg"), filename:"vikings22.jpg")

post23 = Post.create!(caption:"We Have One Life… So Go And Live It.", author_id: 6)

    post23.photo.attach(io: open("https://s3.amazonaws.com/margatsni-seeds/vikings23.jpg"), filename:"vikings23.jpg")

post24 = Post.create!(caption:"Courage Is Finding The Will To Overcome Your Fear, Nothing More.", author_id:6)

    post24.photo.attach(io: open("https://s3.amazonaws.com/margatsni-seeds/vikings24.jpg"), filename:"vikings24.jpg")

post25 = Post.create!(caption:"Courage without the sword is the more difficult path. It must become the only path.", author_id:6)

    post25.photo.attach(io: open("https://s3.amazonaws.com/margatsni-seeds/vikings25.jpg"), filename:"vikings25.jpg")