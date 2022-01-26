/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateTodo: OnCreateTodoSubscription;
  onUpdateTodo: OnUpdateTodoSubscription;
  onDeleteTodo: OnDeleteTodoSubscription;
  onCreateQuestion: OnCreateQuestionSubscription;
  onUpdateQuestion: OnUpdateQuestionSubscription;
  onDeleteQuestion: OnDeleteQuestionSubscription;
};

export type CreateTodoInput = {
  id?: string | null;
  name: string;
  description?: string | null;
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelTodoConditionInput | null> | null;
  or?: Array<ModelTodoConditionInput | null> | null;
  not?: ModelTodoConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Todo = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTodoInput = {
  id: string;
  name?: string | null;
  description?: string | null;
};

export type DeleteTodoInput = {
  id: string;
};

export type CreateQuestionInput = {
  id?: string | null;
  name: string;
  ans1?: string | null;
  ans2?: string | null;
  ans3?: string | null;
  ans4?: string | null;
  ans5?: string | null;
  ans6?: string | null;
  ans7?: string | null;
  ans8?: string | null;
  ans9?: string | null;
};

export type ModelQuestionConditionInput = {
  name?: ModelStringInput | null;
  ans1?: ModelStringInput | null;
  ans2?: ModelStringInput | null;
  ans3?: ModelStringInput | null;
  ans4?: ModelStringInput | null;
  ans5?: ModelStringInput | null;
  ans6?: ModelStringInput | null;
  ans7?: ModelStringInput | null;
  ans8?: ModelStringInput | null;
  ans9?: ModelStringInput | null;
  and?: Array<ModelQuestionConditionInput | null> | null;
  or?: Array<ModelQuestionConditionInput | null> | null;
  not?: ModelQuestionConditionInput | null;
};

export type Question = {
  __typename: "Question";
  id: string;
  name: string;
  ans1?: string | null;
  ans2?: string | null;
  ans3?: string | null;
  ans4?: string | null;
  ans5?: string | null;
  ans6?: string | null;
  ans7?: string | null;
  ans8?: string | null;
  ans9?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateQuestionInput = {
  id: string;
  name?: string | null;
  ans1?: string | null;
  ans2?: string | null;
  ans3?: string | null;
  ans4?: string | null;
  ans5?: string | null;
  ans6?: string | null;
  ans7?: string | null;
  ans8?: string | null;
  ans9?: string | null;
};

export type DeleteQuestionInput = {
  id: string;
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelTodoFilterInput | null> | null;
  or?: Array<ModelTodoFilterInput | null> | null;
  not?: ModelTodoFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection";
  items: Array<Todo | null>;
  nextToken?: string | null;
};

export type ModelQuestionFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  ans1?: ModelStringInput | null;
  ans2?: ModelStringInput | null;
  ans3?: ModelStringInput | null;
  ans4?: ModelStringInput | null;
  ans5?: ModelStringInput | null;
  ans6?: ModelStringInput | null;
  ans7?: ModelStringInput | null;
  ans8?: ModelStringInput | null;
  ans9?: ModelStringInput | null;
  and?: Array<ModelQuestionFilterInput | null> | null;
  or?: Array<ModelQuestionFilterInput | null> | null;
  not?: ModelQuestionFilterInput | null;
};

export type ModelQuestionConnection = {
  __typename: "ModelQuestionConnection";
  items: Array<Question | null>;
  nextToken?: string | null;
};

export type CreateTodoMutation = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTodoMutation = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTodoMutation = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateQuestionMutation = {
  __typename: "Question";
  id: string;
  name: string;
  ans1?: string | null;
  ans2?: string | null;
  ans3?: string | null;
  ans4?: string | null;
  ans5?: string | null;
  ans6?: string | null;
  ans7?: string | null;
  ans8?: string | null;
  ans9?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateQuestionMutation = {
  __typename: "Question";
  id: string;
  name: string;
  ans1?: string | null;
  ans2?: string | null;
  ans3?: string | null;
  ans4?: string | null;
  ans5?: string | null;
  ans6?: string | null;
  ans7?: string | null;
  ans8?: string | null;
  ans9?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteQuestionMutation = {
  __typename: "Question";
  id: string;
  name: string;
  ans1?: string | null;
  ans2?: string | null;
  ans3?: string | null;
  ans4?: string | null;
  ans5?: string | null;
  ans6?: string | null;
  ans7?: string | null;
  ans8?: string | null;
  ans9?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetTodoQuery = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListTodosQuery = {
  __typename: "ModelTodoConnection";
  items: Array<{
    __typename: "Todo";
    id: string;
    name: string;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetQuestionQuery = {
  __typename: "Question";
  id: string;
  name: string;
  ans1?: string | null;
  ans2?: string | null;
  ans3?: string | null;
  ans4?: string | null;
  ans5?: string | null;
  ans6?: string | null;
  ans7?: string | null;
  ans8?: string | null;
  ans9?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListQuestionsQuery = {
  __typename: "ModelQuestionConnection";
  items: Array<{
    __typename: "Question";
    id: string;
    name: string;
    ans1?: string | null;
    ans2?: string | null;
    ans3?: string | null;
    ans4?: string | null;
    ans5?: string | null;
    ans6?: string | null;
    ans7?: string | null;
    ans8?: string | null;
    ans9?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateTodoSubscription = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTodoSubscription = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTodoSubscription = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateQuestionSubscription = {
  __typename: "Question";
  id: string;
  name: string;
  ans1?: string | null;
  ans2?: string | null;
  ans3?: string | null;
  ans4?: string | null;
  ans5?: string | null;
  ans6?: string | null;
  ans7?: string | null;
  ans8?: string | null;
  ans9?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateQuestionSubscription = {
  __typename: "Question";
  id: string;
  name: string;
  ans1?: string | null;
  ans2?: string | null;
  ans3?: string | null;
  ans4?: string | null;
  ans5?: string | null;
  ans6?: string | null;
  ans7?: string | null;
  ans8?: string | null;
  ans9?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteQuestionSubscription = {
  __typename: "Question";
  id: string;
  name: string;
  ans1?: string | null;
  ans2?: string | null;
  ans3?: string | null;
  ans4?: string | null;
  ans5?: string | null;
  ans6?: string | null;
  ans7?: string | null;
  ans8?: string | null;
  ans9?: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateTodo(
    input: CreateTodoInput,
    condition?: ModelTodoConditionInput
  ): Promise<CreateTodoMutation> {
    const statement = `mutation CreateTodo($input: CreateTodoInput!, $condition: ModelTodoConditionInput) {
        createTodo(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTodoMutation>response.data.createTodo;
  }
  async UpdateTodo(
    input: UpdateTodoInput,
    condition?: ModelTodoConditionInput
  ): Promise<UpdateTodoMutation> {
    const statement = `mutation UpdateTodo($input: UpdateTodoInput!, $condition: ModelTodoConditionInput) {
        updateTodo(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTodoMutation>response.data.updateTodo;
  }
  async DeleteTodo(
    input: DeleteTodoInput,
    condition?: ModelTodoConditionInput
  ): Promise<DeleteTodoMutation> {
    const statement = `mutation DeleteTodo($input: DeleteTodoInput!, $condition: ModelTodoConditionInput) {
        deleteTodo(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTodoMutation>response.data.deleteTodo;
  }
  async CreateQuestion(
    input: CreateQuestionInput,
    condition?: ModelQuestionConditionInput
  ): Promise<CreateQuestionMutation> {
    const statement = `mutation CreateQuestion($input: CreateQuestionInput!, $condition: ModelQuestionConditionInput) {
        createQuestion(input: $input, condition: $condition) {
          __typename
          id
          name
          ans1
          ans2
          ans3
          ans4
          ans5
          ans6
          ans7
          ans8
          ans9
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateQuestionMutation>response.data.createQuestion;
  }
  async UpdateQuestion(
    input: UpdateQuestionInput,
    condition?: ModelQuestionConditionInput
  ): Promise<UpdateQuestionMutation> {
    const statement = `mutation UpdateQuestion($input: UpdateQuestionInput!, $condition: ModelQuestionConditionInput) {
        updateQuestion(input: $input, condition: $condition) {
          __typename
          id
          name
          ans1
          ans2
          ans3
          ans4
          ans5
          ans6
          ans7
          ans8
          ans9
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateQuestionMutation>response.data.updateQuestion;
  }
  async DeleteQuestion(
    input: DeleteQuestionInput,
    condition?: ModelQuestionConditionInput
  ): Promise<DeleteQuestionMutation> {
    const statement = `mutation DeleteQuestion($input: DeleteQuestionInput!, $condition: ModelQuestionConditionInput) {
        deleteQuestion(input: $input, condition: $condition) {
          __typename
          id
          name
          ans1
          ans2
          ans3
          ans4
          ans5
          ans6
          ans7
          ans8
          ans9
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteQuestionMutation>response.data.deleteQuestion;
  }
  async GetTodo(id: string): Promise<GetTodoQuery> {
    const statement = `query GetTodo($id: ID!) {
        getTodo(id: $id) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTodoQuery>response.data.getTodo;
  }
  async ListTodos(
    filter?: ModelTodoFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTodosQuery> {
    const statement = `query ListTodos($filter: ModelTodoFilterInput, $limit: Int, $nextToken: String) {
        listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTodosQuery>response.data.listTodos;
  }
  async GetQuestion(id: string): Promise<GetQuestionQuery> {
    const statement = `query GetQuestion($id: ID!) {
        getQuestion(id: $id) {
          __typename
          id
          name
          ans1
          ans2
          ans3
          ans4
          ans5
          ans6
          ans7
          ans8
          ans9
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetQuestionQuery>response.data.getQuestion;
  }
  async ListQuestions(
    filter?: ModelQuestionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListQuestionsQuery> {
    const statement = `query ListQuestions($filter: ModelQuestionFilterInput, $limit: Int, $nextToken: String) {
        listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            ans1
            ans2
            ans3
            ans4
            ans5
            ans6
            ans7
            ans8
            ans9
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListQuestionsQuery>response.data.listQuestions;
  }
  OnCreateTodoListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTodo">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTodo {
        onCreateTodo {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTodo">>
  >;

  OnUpdateTodoListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTodo">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTodo {
        onUpdateTodo {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTodo">>
  >;

  OnDeleteTodoListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTodo">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTodo {
        onDeleteTodo {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTodo">>
  >;

  OnCreateQuestionListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateQuestion">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateQuestion {
        onCreateQuestion {
          __typename
          id
          name
          ans1
          ans2
          ans3
          ans4
          ans5
          ans6
          ans7
          ans8
          ans9
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateQuestion">>
  >;

  OnUpdateQuestionListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateQuestion">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateQuestion {
        onUpdateQuestion {
          __typename
          id
          name
          ans1
          ans2
          ans3
          ans4
          ans5
          ans6
          ans7
          ans8
          ans9
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateQuestion">>
  >;

  OnDeleteQuestionListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteQuestion">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteQuestion {
        onDeleteQuestion {
          __typename
          id
          name
          ans1
          ans2
          ans3
          ans4
          ans5
          ans6
          ans7
          ans8
          ans9
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteQuestion">>
  >;
}
