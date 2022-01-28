use wasm_bindgen::prelude::*;
use wasm_bindgen::JsValue;
use js_sys;
use web_sys;


#[wasm_bindgen(js-namespace = console)]
extern "C"{
    fn log(msg:&str);
}

#[wasm_bindgen]