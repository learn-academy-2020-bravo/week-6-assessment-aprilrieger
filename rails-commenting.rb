# April Rieger ------ ASSESSMENT 6: Rails Commenting Challenge
# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# app/controller/blog_posts_controller.rb

# 1) This is a Controller Class for a model called BlogPost
class BlogPostsController < ApplicationController
  def index
    # 2) We are creating an instance variable to show every Blog Post in the database
    @posts = BlogPost.all
  end

  def show
    # 3) we are creating another instance varibale that will show a specified BlogPost from their id
    @post = BlogPost.find(params[:id])
  end

  # 4) creating a method for new ... its blank... I see that on line 30 we are rendering :new, so I am assuming that that render would appear hear but not 100% on this.
  def new
  end

  def create
    # 5) We are creating a method called create that will create a new blog post if the post is a valid meaning that all requirements of params is satisfied redirect to @post. 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to @post
    else
      render action: :new
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.delete
      redirect_to blog_posts_path
    else
      # 6) I am not to sure what this is. I looked through my notes and lectures and googled and can't figure this out. Are we goig to be redirected back to the post we deleted?
      redirect_to blog_post_path(@post)
    end
  end

  # 7) Private means that no other method below this one will be able to be called outside of this class.
  private
  def blog_post_params
    # 8)
    params.require(:blog_post).permit(:title, :content)
  end

end


# app/models/blog_post.rb

# 9) This is the model for Blog Post
class BlogPost < ApplicationRecord
  # 10) Blog post has may comments which means there is a model called Comments that belongs_to :blogpost
  has_many :comments
end