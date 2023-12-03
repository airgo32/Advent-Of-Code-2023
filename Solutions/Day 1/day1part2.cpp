#include <iostream>
#include <fstream>
#include <string>
#include <map>
#include <vector>

int main() {
    int calibration_sum = 0;
    std::map<std::string, int> word_to_num{
        {"one", 1},
        {"two", 2},
        {"three", 3},
        {"four", 4},
        {"five", 5},
        {"six", 6},
        {"seven", 7},
        {"eight", 8},
        {"nine", 9}
    };
    std::string words[] = {"one", "two", "three", "four", "five", "six", "seven", "eight", "nine"};

    std::ifstream inputfile;
    std::string line;
    inputfile.open("input.txt");

    while (std::getline (inputfile, line)) {
        int first_num = 0, last_num = 0;
        for (char c : line) {
            if (isdigit(c)) {
                last_num = c;
                if (first_num == 0)
                    first_num = last_num;
            }
        }

        int first_word = 0, last_word = 0;
        int first_word_idx = line.length(), last_word_idx = -1;
        for (std::string word : words) {
            char first_char = word[0];
            //first instance of word
            int first_char_idx = line.find_first_of(first_char);
            if (first_char_idx != line.npos) {
                int word_idx = line.find(word);
                if (word_idx < line.find_first_of(first_num) && word_idx < first_word_idx) {
                    first_word_idx = word_idx;
                    first_word = word_to_num[word];
                }
            }
            //last instance of word
            int i = line.find_last_of(last_num);
            while (i < line.length()) {
                int word_idx = line.find(word, i);
                if (word_idx != line.npos) {
                    if (word_idx > last_word_idx) {
                        last_word_idx = word_idx;
                        last_word = word_to_num[word];
                    }
                } else { // if word isn't found, skip to end
                    i = line.length();
                }
                i++;
            }
        }
        first_num = line.find_first_of(first_num) < first_word_idx ? first_num-48: first_word;
        last_num = (int) line.find_last_of(last_num) > last_word_idx ? last_num-48: last_word;
        int calibration_value = (first_num * 10) + last_num;
        calibration_sum += calibration_value;
    }
    std::cout << "Calibration sum: " << calibration_sum << std::endl;
}