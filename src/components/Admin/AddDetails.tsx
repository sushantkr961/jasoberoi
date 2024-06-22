"use client";

import React, { ChangeEvent } from "react";

interface Attribute {
  key: string;
  value: string;
}

interface AddDetailsProps {
  currentField: Attribute;
  handleFieldChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleAddField: () => void;
}

const AddDetails: React.FC<AddDetailsProps> = ({
  currentField,
  handleFieldChange,
  handleAddField,
}) => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
      <input
        id="key"
        name="key"
        placeholder="Attribute Name"
        type="text"
        value={currentField?.key}
        onChange={handleFieldChange}
        className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
      />
      <input
        id="value"
        name="value"
        type="text"
        placeholder="Enter Value"
        value={currentField?.value}
        onChange={handleFieldChange}
        className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
      />
      <button
        onClick={handleAddField}
        className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
      >
        Add More Field
      </button>
    </div>
  );
};

export default AddDetails;
