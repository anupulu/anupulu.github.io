// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Learning = defineDocumentType(() => ({
  name: "Learning",
  filePathPattern: "learnings/**/*.md",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    category: {
      type: "enum",
      options: ["project", "volunteering", "reflection"],
      required: true
    },
    description: { type: "string", required: true },
    insights: { type: "list", of: { type: "string" }, required: true },
    relatedManifestoPrinciples: { type: "list", of: { type: "string" }, required: true },
    tags: { type: "list", of: { type: "string" }, required: true },
    relatedLinks: {
      type: "list",
      of: { type: "json" },
      required: false
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace(/^learnings\//, "")
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Learning]
});
export {
  Learning,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-XY23OFZN.mjs.map
