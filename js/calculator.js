var request = require("request-promise");

document.getElementById("history_btn").addEventListener("click", () => {
  document.getElementById("section_hist").style.visibility = "visible";
  const options = {
    method: "POST",
    uri: "http://127.0.0.1:5000/history",
    form: { value: "" },
  };

  request(options).then((data) => {
    if (JSON.parse(data)[0] === undefined) {
      document.getElementById("hi_a").innerHTML = "";
    } else {
      document.getElementById("hi_a").innerHTML = JSON.parse(data)[0];
    }
    if (JSON.parse(data)[1] === undefined) {
      document.getElementById("hi_b").innerHTML = "";
    } else {
      document.getElementById("hi_b").innerHTML = JSON.parse(data)[1];
    }
    if (JSON.parse(data)[2] === undefined) {
      document.getElementById("hi_c").innerHTML = "";
    } else {
      document.getElementById("hi_c").innerHTML = JSON.parse(data)[2];
    }
    if (JSON.parse(data)[3] === undefined) {
      document.getElementById("hi_d").innerHTML = "";
    } else {
      document.getElementById("hi_d").innerHTML = JSON.parse(data)[3];
    }
    if (JSON.parse(data)[4] === undefined) {
      document.getElementById("hi_e").innerHTML = "";
    } else {
      document.getElementById("hi_e").innerHTML = JSON.parse(data)[4];
    }
    if (JSON.parse(data)[5] === undefined) {
      document.getElementById("hi_f").innerHTML = "";
    } else {
      document.getElementById("hi_f").innerHTML = JSON.parse(data)[5];
    }
    if (JSON.parse(data)[6] === undefined) {
      document.getElementById("hi_g").innerHTML = "";
    } else {
      document.getElementById("hi_g").innerHTML = JSON.parse(data)[6];
    }
    if (JSON.parse(data)[7] === undefined) {
      document.getElementById("hi_h").innerHTML = "";
    } else {
      document.getElementById("hi_h").innerHTML = JSON.parse(data)[7];
    }
    if (JSON.parse(data)[8] === undefined) {
      document.getElementById("hi_i").innerHTML = "";
    } else {
      document.getElementById("hi_i").innerHTML = JSON.parse(data)[8];
    }
    if (JSON.parse(data)[9] === undefined) {
      document.getElementById("hi_j").innerHTML = "";
    } else {
      document.getElementById("hi_j").innerHTML = JSON.parse(data)[9];
    }
  });
});
document.getElementById("history_empty").addEventListener("click", () => {
  document.getElementById("section_hist").style.visibility = "hidden";
});

let values = "";
let result = "";

function updateValue() {
  document.getElementById("result_label").innerHTML = values;
}
function inputClick(element) {
  values += element.innerText;
  updateValue();
}

//calc function

function operatorClick(element) {
  if (values.match(/[/x+-]/g)) {
    values = values.replace(/[/x+-]/g, element.innerText);
  } else {
    values += ` ${element.innerText} `;
  }
  updateValue();
}

document.getElementById("btn_del").addEventListener("click", () => {
  values = "";
  updateValue();
});

document.getElementById("btn_equal").addEventListener("click", () => {
  const options = {
    method: "POST",
    uri: "http://127.0.0.1:5000/calculation",
    form: { value: values },
  };

  request(options).then((innerHTML) => {
    result = innerHTML;
    values = result;
    updateValue();
  });
});

document.getElementById("history_clr_btn").addEventListener("click", () => {
  const options = {
    method: "POST",
    uri: "http://127.0.0.1:5000/history",
    form: { value: "clear" },
  };
  request(options).then(() => {
    document.getElementById("section_hist").style.visibility = "hidden";
  });
});
