# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


airlines = Airline.create([
  { 
    name: "Cathay Pacific",
    image_url: "https://open-flights.s3.amazonaws.com/Cathay-Pacific.png"
  }, 
  { 
    name: "Lufthansa",
    image_url: "https://open-flights.s3.amazonaws.com/Lufthansa.png"
  },
  { 
    name: "Delta",
    image_url: "https://open-flights.s3.amazonaws.com/Delta.png" 
  }, 
  { 
    name: "Alaska Airlines",
    image_url: "https://open-flights.s3.amazonaws.com/Alaska-Airlines.png" 
  }, 
  { 
    name: "Air France",
    image_url: "https://open-flights.s3.amazonaws.com/Air-France.png" 
  }, 
  { 
    name: "Xiamen Airlines",
    image_url: "https://open-flights.s3.amazonaws.com/XiamenAir.png" 
  }
])

reviews = Review.create([
    {
        title: 'I love this airline',
        description: 'A little cramped, food was okay',
        score: 4,
        airline: airlines.first
    },
    {
        title: 'Terrible',
        description: 'hot, smelly, lots of kids',
        score: 2,
        airline: airlines.first
    }
])