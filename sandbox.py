# def create_staircase(nums):
#   step = 1
#   subsets = []
#   while len(nums) != 0:
#     if len(nums) >= step:
#       subsets.append(nums[0:step])
#       nums = nums[step:]
#       step += 1
#     else:
#       return False
    
#   return subsets

def create_staircase(nums):
  while len(nums) != 0:
    step = 1
    subsets = []
    if len(nums) >= step:
      subsets.append(nums[0:step])
      nums = nums[step:]
      step += 1
    else:
      return False

  return subsets

print(create_staircase([1,2,3,4,5,6]))


def decode(message_file):
    # Read the file and extract pairs
    with open(message_file, 'r') as file:
        lines = file.readlines()

    # Parse the lines into a dictionary of number-word pairs
    number_word_pairs = {}
    for line in lines:
        parts = line.split()
        number = int(parts[0])
        word = ' '.join(parts[1:])  # Joining back the parts to handle multi-word entries
        number_word_pairs[number] = word

    # Create a list of words in the order of their numbers
    max_number = max(number_word_pairs.keys())
    ordered_words = [''] * (max_number + 1)  # Create a list to hold words for each number
    for number, word in number_word_pairs.items():
        ordered_words[number] = word

    # Determine which numbers correspond to the ends of the pyramid rows
    message_words = []
    current_row_length = 1
    current_index = 1
    while current_index <= max_number:
        if current_index in number_word_pairs:
            message_words.append(ordered_words[current_index])
        current_index += current_row_length
        current_row_length += 1

    # Join the collected words to form the decoded message
    return ' '.join(message_words)

# Example usage
print(decode("encodedList.txt"))  # Assuming 'message.txt' is the file with the encoded message
f = open("encodedList.txt", "r")
content = f.read()
# print(content)




def decode(message_file):
    # Open the specified file for reading. 'with' is used to manage file context; it automatically
    # handles file closing after reading its contents.
    with open(message_file, 'r') as file:
        lines = file.readlines()  # Read all lines from the file into a list.

    # Initialize a dictionary to store number-word pairs from the file.
    number_word_pairs = {}
    for line in lines:  # Iterate through each line of the file.
        parts = line.split()  # Split the line into parts where the first part is the number and the rest are the word(s).
        number = int(parts[0])  # Convert the first part of the line to an integer (the number).
        word = ' '.join(parts[1:])  # Join the remaining parts to form the full word or phrase.
        number_word_pairs[number] = word  # Map the number to the word in the dictionary.

    # Determine the maximum number in the dictionary keys to know the range of numbers we need to process.
    max_number = max(number_word_pairs.keys())

    # Prepare a list to store words in the order of their associated numbers. Initialize all entries with an empty string.
    ordered_words = [''] * (max_number + 1)
    for number, word in number_word_pairs.items():
        ordered_words[number] = word  # Fill the list with words at the index corresponding to their number.

    # List to collect the words that form the decoded message based on pyramid row ends.
    message_words = []
    current_row_length = 1  # Initialize the row length (first row has 1 element).
    current_index = 1  # Initialize the starting index (smallest number in the pyramid).

    # Iterate through numbers to find which are at the end of each pyramid row.
    while current_index <= max_number:
        # Check if the current index is a key in the dictionary to avoid out-of-index errors.
        if current_index in number_word_pairs:
            # Append the word corresponding to the current index to the message list.
            message_words.append(ordered_words[current_index])
        # Move the index to the next row's end by adding the current row length.
        current_index += current_row_length
        # Increment the row length for the next row in the pyramid (each row increases by one element).
        current_row_length += 1

    # Combine the words that are at the ends of pyramid rows into a single string as the final decoded message.
    return ' '.join(message_words)  # Join the list of words with spaces in between.

# Usage example: assuming 'message.txt' is the file with the encoded message
# print(decode('message.txt'))  # Uncomment to run in an actual Python environment
