const workoutSchedule = {
    Monday: {
        day: "Push",
        exercises: [
            { name: "Bench Press", image: "https://www.anytimefitness.com/wp-content/uploads/2024/01/AF-HERO_BenchPress-1024x683.jpg" },
            { name: "Overhead Shoulder Press", image: "https://rogersathletic.com/wp-content/uploads/2023/04/overhead_press_001.jpg" },
            { name: "Tricep Dips", image: "https://hips.hearstapps.com/vidthumb/60f6aaa1-f5ec-4269-83a1-ff047272e24f/thumb_1920x1080_00001_1676304795_42444.jpg?crop=1xw:1xh;center,top&resize=1200:*" },
            { name: "Incline Dumbbell Press", image: "https://hips.hearstapps.com/hmg-prod/images/man-in-sportswear-lies-on-the-gym-bench-and-workout-royalty-free-image-1678124106.jpg" },
            { name: "Lateral Raises", image: "https://cdn.muscleandstrength.com/sites/default/files/dumbbell-lateral-raise.jpg" },
            { name: "Tricep Pushdown", image: "https://boxlifemagazine.com/wp-content/uploads/2023/05/tricep-pushdown.png" }
        ]
    },
    Tuesday: {
        day: "Pull",
        exercises: [
            { name: "Pull-Ups", image: "https://manmatters.com/blog/content/images/2021/11/Untitled-design---2021-11-01T125710.356.jpg" },
            { name: "Deadlifts", image: "https://hardtokillfitness.co/cdn/shop/articles/deadlifts.png?v=1661801478" },
            { name: "Bent Over Rows", image: "https://hips.hearstapps.com/hmg-prod/images/bent-over-row-1579627763.jpg?crop=0.862xw:0.576xh;0.0374xw,0.289xh&resize=980:*" },
            { name: "Seated Rows", image: "https://i.ytimg.com/vi/GZbfZ033f74/maxresdefault.jpg" },
            { name: "Face Pulls", image: "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2018/12/800-ropefacepull.jpg?w=800&h=630&crop=1&quality=86&strip=all" },
            { name: "Hammer Curls", image: "https://www.trainheroic.com/wp-content/uploads/2023/02/AdobeStock_417412809-TH-jpg.webp" }
        ]
    },
    Wednesday: {
        day: "Legs",
        exercises: [
            { name: "Squats", image: "https://example.com/squats.jpg" },
            { name: "Leg Press", image: "https://example.com/leg_press.jpg" },
            { name: "Lunges", image: "https://example.com/lunges.jpg" },
            { name: "Leg Curls", image: "https://example.com/leg_curls.jpg" },
            { name: "Calf Raises", image: "https://example.com/calf_raises.jpg" },
            { name: "Leg Extensions", image: "https://example.com/leg_extensions.jpg" }
        ]
    },
    Thursday: {
        day: "Push",
        exercises: [
            { name: "Push-Ups", image: "https://example.com/push_ups.jpg" },
            { name: "Dumbbell Shoulder Press", image: "https://example.com/dumbbell_shoulder_press.jpg" },
            { name: "Tricep Kickbacks", image: "https://example.com/tricep_kickbacks.jpg" },
            { name: "Chest Flyes", image: "https://example.com/chest_flyes.jpg" },
            { name: "Front Raises", image: "https://example.com/front_raises.jpg" },
            { name: "Overhead Tricep Extension", image: "https://example.com/overhead_tricep_extension.jpg" }
        ]
    },
    Friday: {
        day: "Pull",
        exercises: [
            { name: "Chin-Ups", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzdqYbZxR6hTIXfoO9moeUlIr15EA4hZKIJA&s" },
            { name: "T-Bar Rows", image: "https://i.ytimg.com/vi/j3Igk5nyZE4/maxresdefault.jpg" },
            { name: "Single Arm Dumbbell Rows", image: "https://ik.imagekit.io/02fmeo4exvw/exercise-library/large/126-3.jpg" },
            { name: "Lat Pulldowns", image: "https://bellsofsteel.com/cdn/shop/articles/Does-Lat-Pulldown-Work-Forearms.webp?v=1708539827&width=1024" },
            { name: "Bicep Curls", image: "https://cdn.shopify.com/s/files/1/2384/0833/files/inner-bicep-curl-benefits.jpg?v=1689192787" },
            { name: "Reverse Flyes", image: "https://www.dmoose.com/cdn/shop/articles/1_ecc5b483-14de-4d3d-8750-f0e66afdddda.jpg?v=1647864070" }
        ]
    },
    Saturday: {
        day: "Shoulders",
        exercises: [
            { name: "Overhead Shoulder Press", image: "https://example.com/overhead_shoulder_press.jpg" },
            { name: "Lateral Raises", image: "https://example.com/lateral_raises.jpg" },
            { name: "Front Raises", image: "https://example.com/front_raises.jpg" },
            { name: "Reverse Pec Deck Fly", image: "https://example.com/reverse_pec_deck_fly.jpg" },
            { name: "Upright Rows", image: "https://example.com/upright_rows.jpg" },
            { name: "Shrugs", image: "https://example.com/shrugs.jpg" }
        ]
    },
    Sunday: {
        day: "Pull",
        exercises: [
            { name: "Chin-Ups", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzdqYbZxR6hTIXfoO9moeUlIr15EA4hZKIJA&s" },
            { name: "T-Bar Rows", image: "https://i.ytimg.com/vi/j3Igk5nyZE4/maxresdefault.jpg" },
            { name: "Single Arm Dumbbell Rows", image: "https://ik.imagekit.io/02fmeo4exvw/exercise-library/large/126-3.jpg" },
            { name: "Lat Pulldowns", image: "https://bellsofsteel.com/cdn/shop/articles/Does-Lat-Pulldown-Work-Forearms.webp?v=1708539827&width=1024" },
            { name: "Bicep Curls", image: "https://cdn.shopify.com/s/files/1/2384/0833/files/inner-bicep-curl-benefits.jpg?v=1689192787" },
            { name: "Reverse Flyes", image: "https://www.dmoose.com/cdn/shop/articles/1_ecc5b483-14de-4d3d-8750-f0e66afdddda.jpg?v=1647864070" }
        ]
    }
};

export default workoutSchedule;
