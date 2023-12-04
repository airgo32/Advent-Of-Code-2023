let sum_of_products = 0;

function main() {

    let input = "Solutions/Day2/input.txt" // input goes here
    let fs = require("fs")

    fs.readFile(input, function (err, data) {
        if (err) {
            return console.log(err)
        }
        let lines = data.toString("utf-8").split('\n')
        for (let n = 0; n < lines.length; n++) {
            let valid_game = true;
            let line = lines[n]
            let parts = line.split(":")
            let rounds = parts[1].split(";")       
            let max_red = 0, max_green = 0, max_blue = 0

            for (let j = 0; j < rounds.length; j++) {
                let pulls = rounds[j].split(",")

                for (let i = 0; i < pulls.length; i++) {
                    let space = pulls[i].trim().indexOf(" ")
                    let count = parseInt(pulls[i].trim().substring(0, space))
                    let color = pulls[i].trim().slice(space+1)
                    switch(color) {
                        case "red":
                            max_red = count > max_red ? count : max_red
                        break;
                        case "green":
                            max_green = count > max_green ? count : max_green
                        break;
                        case "blue":
                            max_blue = count > max_blue ? count : max_blue
                        break;
                    }
                }
            }
            if (valid_game) {
                sum_of_products += (max_red * max_green * max_blue)
            }
        }
        console.log(sum_of_products)

    })
}

main()