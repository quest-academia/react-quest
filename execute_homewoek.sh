echo "何章の宿題？(例: 02)"
read num
FILENAMES=(`find ${num}_*/homework/*`)
echo ${FILENAMES[@]}
for i in ${FILENAMES[@]}
do
echo "*****************"
echo "${i}"
echo ""
node $i
echo ""
done
