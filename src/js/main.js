
import { sort } from "./module/sort";
import { modal } from "./module/modal";
import { scroll } from "./module/scroll";
import { selectedFests } from "./module/selected-fests";
import { openModalViaURL } from "./module/modal-via-url";
import { formModal } from "./module/form-modal";

var url = window.location.href;
    function UrlExists(url) {
        var http = new XMLHttpRequest();
        http.open('HEAD', url, false);
        http.send();
        if (http.status != 404)
            return true;
        else
            return false;
}

UrlExists(url)

modal();

sort();

selectedFests();

scroll();

openModalViaURL();

formModal();


