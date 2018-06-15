# 1. In THIS directory, create a new directory called star_wars. > Example answer: mkdir star_wars
mkdir star_wars

# 2. In the star_wars folder, create two new directories: empire and rebellion.
mkdir star_wars/empire
mkdir star_wars/rebellion

# 3. Inside the empire directory, create a .txt file called darth_vader.txt.
touch star_wars/empire/darth_vader.txt

# 4. Use the force (or your echo) to add the text ...heavy breathing... to the darth_vader.txt file. (Don’t remember how to do this? Use the ‘other force’, known as Google!)
echo "...heavy breathing..." > star_wars/empire/darth_vader.txt

# 5. Inside the empire directory, create a .txt file called emperor_palpatine.txt.
touch star_wars/empire/emperor_palpatine.txt

# 6. Inside the empire directory, create a directory called death_star.
mkdir star_wars/empire/death_star

# 7. Move darth_vader.txt into the death_star.
mv star_wars/empire/darth_vader.txt star_wars/empire/death_star/
