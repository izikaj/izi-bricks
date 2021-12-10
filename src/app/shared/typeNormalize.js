import uid from "./uid";
import { isHash } from "./mapping";
import firstExisting from "./firstExisting";

function typeNormalize(data) {
  if (!data) {
    return
  }

  if (!isHash(data.as)) {
    // ensure type is a hash
    data = {
      as: "object",
      type: data.type,
      fields: [{
        ...data,
        name: firstExisting(data.name, "value"),
      }],
    };
  }

  if (data.type !== undefined) {
    // inject type hidden field
    data.fields = [
      ...data.fields.filter(f => f.name !== "type"),
      {
        name: "type",
        value: data.type,
        as: "hidden",
      },
    ]
  }

  data.id = data.id || uid();

  return data;
}

export default typeNormalize;
