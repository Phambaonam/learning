# bash comment block  



http://unix.stackexchange.com/questions/37411/multiline-shell-script-comments-how-does-this-work




: <<'end_long_comment'
This is an abuse of the null command ':' and the here-document syntax
to achieve a "multi-line comment".  According to the POSIX spec linked 
above, if any character in the delimiter word ("end_long_comment" in 
this case) above is quoted, the here-document will not be expanded in 
any way.  This is **critical**, as failing to quote the "end_long_comment" 
will result in the problems with unintended expansions described above. 
All of this text in this here-doc goes to the standard input of :, which 
does nothing with it, hence the effect is like a comment.  There is very 
little point to doing this besides throwing people off.  Just use '#'.
end_long_comment




http://pubs.opengroup.org/onlinepubs/9699919799/utilities/V3_chap02.html#tag_18_07_04




http://raspberrypi.stackexchange.com/questions/60847/how-can-i-make-a-video-player-by-using-raspberry-pi-3?noredirect=1#comment94738_60847



http://stackoverflow.com/questions/947897/block-comments-in-a-shell-script
