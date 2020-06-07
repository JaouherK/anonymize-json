import {Anonymize} from "./anonymize";

const payload = {
    foo: 'bar',
    feed: "me",
    lv1: {
        lv2: {
            lv3: "content"
        }
    }
};

const anon = new Anonymize();

const c = anon.anonymize(payload,['lv2']);

console.log(c);
