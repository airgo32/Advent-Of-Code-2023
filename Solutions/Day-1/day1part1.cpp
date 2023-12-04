#include <iostream>
#include <fstream>
#include <string>

int main() {
    int calibration_sum = 0;

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
        int calibration_value = (first_num * 10) + last_num - 528;
        calibration_sum += calibration_value;
    }

    std::cout << "Calibration sum: " << calibration_sum << std::endl;
}