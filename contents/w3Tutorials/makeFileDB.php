<?php

    // change html file name
    // for ($j = 142; $j <= 154; $j++) {
    //   rename("adfile/html/".$j.".html", "adfile/html/rename/".($j-1).".html");
    // }

    //copy java file
    $i = 247;
    copy("adfile/java/J".$i.".java", "adfile/java/J".($i+1).".java");
    copy("adfile/java/R".$i.".txt", "adfile/java/R".($i+1).".txt");
    copy("adfile/java/Q".$i.".txt", "adfile/java/Q".($i+1).".txt");

    // change java file name
    // for ($j = 177; $j <= 177; $j++) {
    //   rename("adfile/java/J".$j.".java", "adfile/java/rename/J".($j+1).".java");
    //   rename("adfile/java/R".$j.".txt", "adfile/java/rename/R".($j+1).".txt");
    //   rename("adfile/java/Q".$j.".txt", "adfile/java/rename/Q".($j+1).".txt");
    // }

    //copy java files to another fold[rename]
    // for ($j = 176; $j <= 176; $j++) {
    //   copy("adfile/java/J".$j.".java", "adfile/java/rename/J".($j+1).".java");
    //   copy("adfile/java/R".$j.".txt", "adfile/java/rename/R".($j+1).".txt");
    //   copy("adfile/java/Q".$j.".txt", "adfile/java/rename/Q".($j+1).".txt");
    // }

?>
