// 空数组储存计算结果
var record = [];
var displayScreen = document.querySelector('.calculator__screen');
var btn = document.querySelectorAll('button');
var recordBtn = document.getElementById('record-button');
var recordDisplay = document.getElementById('record-display');

//e.target.innerHTML = 是被点击目标显示的值
//btn[i] = 点击的第i个button
for (var i = 0; i < btn.length; i++) {
	btn[i].addEventListener('click', function (e) {
		switch (e.target.innerHTML) {
			//C键 屏幕清空
			case 'C':
				displayScreen.value = '';
				break;
			//点击 =，获得显示屏中的表达式并计算结果，保存结果
			case '=':
				try {
					//将显示屏的内容交给eval（）做计算，将结果再替换回显示屏中
					displayScreen.value = eval(displayScreen.value);
				} catch (error) {
					// displayScreen.value = error;
					//错误会中断控制流，通过 try catch 对错误做一些处理 如果有error也显示屏出来
					displayScreen.value = 'Error';
				}
				record.push(displayScreen.value);
				// console.log(record);
				displayRecord();
				break;
			//点击其他的按钮，将按钮内容追加到显示屏上
			default:
				displayScreen.value += e.target.innerHTML;
		}
	});
}

//历史记录按钮开关
recordBtn.addEventListener('click', function () {
	if (recordDisplay.style.display === 'none') {
		recordDisplay.style.display = 'block';
	} else {
		recordDisplay.style.display = 'none';
	}
});

function displayRecord() {
	var lis = recordDisplay.children;
	//给ol里面添加li 每得到一个新result就添加一个li
	var li = document.createElement('li');
	recordDisplay.insertBefore(li, lis[0]); //在最上方添加
	li.innerText = ' calculated result: ' + record[record.length - 1]; //添加的内容就是数组的最后一个元素，也可以先 record.reverse()，然后添加第一个元素
}
